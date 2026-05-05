import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  private employeeService = inject(EmployeeServiceService);
  private router = new Router();
  employee = {
    id:0,
    name: '',
    phoneNo: 0,
    role:''
  }


  onSubmit() {
    this.employeeService.createEmployee(this.employee).subscribe(
      {
        next: (r) => { console.log("Employee created: ", r), this.router.navigate(['/']); },
        error: (e) => { console.log(e); }
      }
    )
  }

}
