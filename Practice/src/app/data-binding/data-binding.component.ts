import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {HighlightDirective } from './highlight.directive'

@Component({
  selector: 'app-data-binding',
  standalone:true,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
  imports:[FormsModule,CommonModule,HighlightDirective]
})
export class DataBindingComponent {


  name: any = "N";

  greet() {
    alert('Hello ' + this.name);
  }

  isVisible: boolean = true;

  names: any = ["A", "B", "C", "D"];

  isError: boolean = false;

  // Lifecycle Hooks
  ngOnInit() {   // Calls when component is loaded
    alert("Init Hook called!");
  }

  ngAfterViewInit() {
    alert("HTML is loaded for this component.");
  }

}



