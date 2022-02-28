import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UpdateEmployeeRecordComponent } from '../update-employee-record/update-employee-record.component';
import { EmployeeState } from '../State/employee.reducer';
import { Employee } from 'src/app/model/employees.model';
import { listSelector } from '../State/employee.selector';
import { deleteEmployee, loadpost } from '../State/employees.actions';

@Component({
  selector: 'app-display-records',
  templateUrl: './display-records.component.html',
  styleUrls: ['./display-records.component.scss']
})
export class DisplayRecordsComponent implements OnInit {
  
  constructor(private http: HttpClient, private store: Store<EmployeeState>,public dialog: MatDialog,private router:Router) { }
  
  employee: Employee[] = [];
  employee$ = this.store.pipe(select(listSelector))
  value = '';
  done = new Subject();
  ngOnInit(): void {
   
    this.store.select(listSelector).subscribe((data:any) => {
      console.log(data);
    })
    this.getList()
  }


  ondel(id: string) {
    this.store.dispatch(deleteEmployee(id))
    console.log("deleted");
  }

  getList() {
    this.store.dispatch(loadpost())
  }

  openDialog(employee: any) {
    localStorage.setItem('id', employee.id)
    const dialogRef = this.dialog.open(UpdateEmployeeRecordComponent,{
      width: "600px",
      data: employee,

    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }
  onadd(){
    this.router.navigateByUrl('dashboard/add')
  }
}
