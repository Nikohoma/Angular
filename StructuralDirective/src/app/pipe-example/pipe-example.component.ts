import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {
  players: any = [
    { pid: 101, pname: 'Ray', pcountry: 'India', dob:'11/23/1990' },
    { pid: 102, pname: 'Jai', pcountry: 'Nepal', dob: '8/13/1980' },
    { pid: 103, pname: 'Starc', pcountry: 'Australia', dob: '12/2/1984' },
    { pid: 104, pname: 'Archer', pcountry: 'England', dob: '7/2/1978' }
  ];
}
