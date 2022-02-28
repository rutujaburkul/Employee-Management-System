import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Employee } from "src/app/model/employees.model";
import { EmployeeState } from "./../State/employee.reducer";


export const listSelector=createSelector(
    (state:EmployeeState)=> state.employees,
    (employees:ReadonlyArray<Employee>)=>employees
)
