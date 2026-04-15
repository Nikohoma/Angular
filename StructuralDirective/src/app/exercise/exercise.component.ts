import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {
  emptylist: any = [];
  productList: any = [
    {pid:1,pname:"Phone",pprice:25000,pcategory:"Electronics"},
    {pid:2,pname:"Shirt",pprice:500,pcategory:"Clothing"},
    {pid:3,pname:"Curtains",pprice:1000,pcategory:"Home Decor"},
    {pid:4,pname:"Headphones",pprice:1500,pcategory:"Electronics"},
    {pid:5,pname:"Joggers",pprice:900,pcategory:"Clothing"},
    {pid:6,pname:"BedSheet",pprice:400,pcategory:"Home Decor"},
    { pid:7, pname: "Charger", pprice: 900, pcategory: "Electronics" }
  ];

}
