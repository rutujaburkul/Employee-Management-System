import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormArray, FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { addEmployee } from '../State/employees.actions';
import { EmployeeState } from '../State/employee.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {
  employeeForm!: FormGroup;
  empList: any
  date: any
  employees:any

  Department: Array<any> = [
    {
      name: 'HR',
      value: 'HR'
    },
    {
      name: 'Sales',
      value: 'Sales'
    },
    {
      name: 'Finance',
      value: 'Finance'
    },
    {
      name: 'Engineer',
      value: 'Engineer'
    },
    {
      name: 'Others',
      value: 'Others'
    },

  ]
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private store: Store<EmployeeState>,private router:Router) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      profilePic: ['', Validators.required],
      gender: ['', Validators.required],
      salary: ['', Validators.required],
      date: ['', Validators.required],
      note: ['', Validators.required],
      isArray: this.formBuilder.array([], [Validators.required]),
      service: ['advance']
    });

   
  }
  
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  onSubmit() {
   
   this.employees = {
      id: '',
      fullName: this.employeeForm.value.fullName,
      profilePic: this.employeeForm.value.profilePic,
      gender: this.employeeForm.value.gender,
      salary: this.employeeForm.value.salary,
      date: this.employeeForm.value.date,
      note: this.employeeForm.value.note,
      department: this.employeeForm.value.isArray

    }
    this.store.dispatch(addEmployee(this.employees))
    console.log("employee added succesfully");
    this.router.navigateByUrl('dashboard/list')
    
  }

  onChange(event: any) {
    const isArray: FormArray = this.employeeForm.get('isArray') as FormArray

    if (event.target.checked) {
      isArray.push(new FormControl(event.target.value));

    }
    else {
      let i: number = 0;
      isArray.controls.forEach((item: any) => {
        if (item.value == event.target.value) {
          isArray.removeAt(i);
          return;
        }
        i++;
      })
    }
  }
}