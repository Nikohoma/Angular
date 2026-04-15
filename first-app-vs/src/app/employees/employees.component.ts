import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  emps: any= [
    {eid:1,ename:'sam',esalary:96000,edoj:'11/23/2025'},
    {eid:2,ename:'maan',esalary:86000,edoj:'12/3/2025'},
    {eid:3,ename:'vini',esalary:54300.2,edoj:'1/2/2026'},
    {eid:4,ename:'arsh',esalary:54700.55,edoj:'4/13/2025'},
    {eid:5 , ename: 'deep', esalary: 34999, edoj: '11/2/2022' }
  ]
}
