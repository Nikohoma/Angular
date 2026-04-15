import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {
  emps: any = [
    {id:1,name:'sam',salary:90000,doj:'12/12/2022'},
    {id:2,name:'ram',salary:83900,doj:'5/22/2023'},
    {id:3,name:'shyam',salary:81200,doj:'1/2/2021'},
    {id:4,name:'raj',salary:98000,doj:'9/11/2018'},
    { id:5, name: 'jai', salary: 34000, doj: '11/22/2025' }
  ]
}
