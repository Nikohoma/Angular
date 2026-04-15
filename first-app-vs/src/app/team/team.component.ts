import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  image_path: string = "/favicon.ico";
  teams: any = [
    {tid:1,tname:"MI",tlogo:"assets/mi.png",tslogan:"Mumbai Go!"},
    {tid:2,tname:"DC",tlogo:"assets/dc.jpg",tslogan:"Delhi Go!"},
    { tid: 3, tname: "RR", tlogo:"assets/rr.png",tslogan:"Rajasthan Go!"}
  ]
}
