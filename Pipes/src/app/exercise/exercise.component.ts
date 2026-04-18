import { Component } from '@angular/core';
import { BonusService } from "../bonus.service";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {

  calculatedBonus: string = '';
  constructor(public obj: BonusService) { }

  getBonus(salary:string) {
    this.calculatedBonus = this.obj.calculateBonus(salary);
  }
}
