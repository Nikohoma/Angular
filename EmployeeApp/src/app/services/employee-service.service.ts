import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Employee {
  id: number,
  name: string,
  phoneNo: number,
  role: string

}

export interface updateEmployeedto {
  name: string,
  phoneNo: number,
  role: string
}

@Injectable({
  providedIn: 'root'
})




export class EmployeeServiceService {
  private apiUrl = 'https://localhost:7280/api/Employee';

  emplist: Employee[] = []

  updateEmployeedto = {
    name: '',
    phoneNo: 0,
    role:''
  }
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.apiUrl, employee);

  }

  updateEmployee(id: number, employee: updateEmployeedto) {
    return this.http.put(`${this.apiUrl}/${id}`,employee);
  }


}
