import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeState } from '../State/employee.reducer';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { EmployeeService } from '../../../app/service/employee.service';
import { updateEmployee, updateEmployeeSuccess } from './../State/employees.actions';

@Component({
  selector: 'app-update-employee-record',
  templateUrl: './update-employee-record.component.html',
  styleUrls: ['./update-employee-record.component.scss']
})
export class UpdateEmployeeRecordComponent implements OnInit {
  fullName: any
  profilePic: any
  gender: any
  salary: any
  note: any
  department: any
  empId: any
  UpdateForm!: FormGroup;

  constructor(public dialogRef: MatDialogRef<UpdateEmployeeRecordComponent>, private formBuilder: FormBuilder, private postService: EmployeeService, private http: HttpClient, private store: Store<EmployeeState>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {

    this.fullName = data.fullName
    this.profilePic = data.profilePic
    this.gender = data.gender
    this.salary = data.salary
    this.note = data.note
    this.department = data.department
    this.empId = data.id
    console.log(data);
  }


  ngOnInit(): void {


    this.UpdateForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      profilePic: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      date: ['', [Validators.required]],
      note: ['', [Validators.required]],
      department: ['', [Validators.required]],
      service: ['advance']

    })
  }
  onupdate() {
    
    let reqData = {
      id:'',
      fullName: this.UpdateForm.value.fullName,
      profilePic:this.UpdateForm.value.profilePic,
      gender: this.UpdateForm.value.gender,
      salary: this.UpdateForm.value.salary,
      note: this.UpdateForm.value.note,
      department: this.UpdateForm.value.department,

    }
    console.log(reqData);
    
    this.store.dispatch(updateEmployee(reqData))
    console.log(this.empId);

    this.dialogRef.close();
  }

}
