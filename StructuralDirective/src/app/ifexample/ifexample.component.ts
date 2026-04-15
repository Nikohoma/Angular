import { Component } from '@angular/core';

@Component({
  selector: 'app-ifexample',
  templateUrl: './ifexample.component.html',
  styleUrl: './ifexample.component.css'
})
export class IfexampleComponent {
  isHidden: boolean = false;
  products: any = ['Iphone', 'Earbuds', 'Washing Machine', 'Mobiles'];
  emps: any =
    [
      {eid:1,ename:"Sam",salary:90000},
      {eid:2,ename:"Ram",salary:100000},
      { eid:3, ename: "Jan", salary:74000}
    ]
}
