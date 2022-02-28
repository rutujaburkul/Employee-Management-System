import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayRecordsComponent } from './components/display-records/display-records.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard/add', pathMatch: 'full'},
  {path: 'dashboard',component:DashboardComponent,
    children:[
      { path: 'add', component:EmpDetailsComponent },
      { path:'list',component:DisplayRecordsComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
