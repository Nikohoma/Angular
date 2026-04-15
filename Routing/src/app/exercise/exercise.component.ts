import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {
  products: any = [
    {pid:110,pname:'Mobile',pprice:142000,pmfg:'12/02/2014',pexp:'12/02/2019'},
    {pid:121,pname:'Camera',pprice:5000,pmfg:'11/03/2016',pexp:'11/03/2018'},
    { pid: 101, pname: 'Earphone', pprice: 3000, pmfg: '11/04/2016', pexp:'11/04/2020'}
  ]

}
