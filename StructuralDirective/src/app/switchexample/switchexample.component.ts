import { Component } from '@angular/core';

@Component({
  selector: 'app-switchexample',
  templateUrl: './switchexample.component.html',
  styleUrl: './switchexample.component.css'
})
export class SwitchexampleComponent {
  players: any = [
    { pid: 101, pname: 'Ray', pcountry: 'India' },
    { pid: 102, pname: 'Jai', pcountry: 'Nepal' },
    { pid: 103, pname: 'Starc', pcountry: 'Australia' },
    { pid: 104, pname: 'Archer', pcountry: 'England' }
  ];
}
