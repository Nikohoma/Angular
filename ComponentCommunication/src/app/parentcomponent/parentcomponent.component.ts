import { Component } from '@angular/core';
import { ChildcomponentComponent } from '../childcomponent/childcomponent.component';

@Component({
  selector: 'app-parentcomponent',
  //imports: [ChildcomponentComponent],
  templateUrl: './parentcomponent.component.html',
  styleUrl: './parentcomponent.component.css'
})
export class ParentcomponentComponent {
  //parentName = 'Hello from Parent';
  countries: string[] = ['India', 'USA', 'Australia'];
  selectedCountry: string = '';
}
