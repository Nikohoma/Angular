import { Component,OnInit } from '@angular/core';
import { Employee, EmployeeServiceService } from '../../services/employee-service.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  employeeService = inject(EmployeeServiceService);
  private router = inject(Router);
  employees: Employee[] = []

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      {
        next: (r) => {
          console.log("API RESPONSE:", r); this.employees = r
        },
        error: (e) => console.error(e)
      }
    )
  }

  createEmployeeClicked() {
    this.router.navigate(['/employees/create']);

  }

  editClicked(id:number) {
    this.router.navigate(['employees/update',id]);
  }

}
