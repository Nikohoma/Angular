import { Component } from '@angular/core';
import { Employee, EmployeeServiceService } from '../../services/employee-service.service';
import { inject } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private employeeService = inject(EmployeeServiceService)

  empId!: number;

  updatedEmployee = {
    name: '',
    phoneNo: 0,
    role: ''
  }

  ngOnInit() {
    this.empId = Number(this.route.snapshot.paramMap.get('id'));
  }

  onSubmit() {
    this.updateEmployee();
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.empId, this.updatedEmployee).
      subscribe({
        next: (r) => { console.log("Updated !"); this.router.navigate(['/']); },
        error: (e) => console.error(e)
      })

  }
}
