import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html',
  styleUrl: './binding-example.component.css'
})
export class BindingExampleComponent {
  name: string = '';
  wish() {
    this.name = 'Good Morning, '+this.name;
  }
}
