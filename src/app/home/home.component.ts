import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      employees => this.employees = employees
    );
  }

  deleteEmployee(id): void {
    this.employeeService.deleteEmployee(id).subscribe(
      () => this.getEmployees()
    );
  }
}
