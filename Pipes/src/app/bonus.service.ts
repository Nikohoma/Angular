import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  constructor() { }

  calculateBonus(salary: string) : string {
    const sal = Number(salary);
    if (sal < 50000) { return "None"; }
    if (sal > 100000) { return "10000"; }
    else { return "5000"; }
  }
}
