import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrl: './childcomponent.component.css'
})
export class ChildcomponentComponent {
  //@Input() name: string = '';    // Expecting an input from parent
  @Input() country: string = '';

  getStates(): string[] {
    if (this.country === 'India') {
      return ['Delhi', 'Maharashtra'];
    }
    else if (this.country === 'USA') {
      return ['California', 'Texas'];
    }
    else if (this.country === 'Australia') {
      return ['Sydney', 'Melbourne'];
    }
    return [];
  }
}
