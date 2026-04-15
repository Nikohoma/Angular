import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: "<h1>Coming from template</h1>,  <h2>{{title}}</h2>",
  //templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  title: string = "Second Component Template";
}
