import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  employee = new Employee();

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employee).subscribe(
      () => this.goBack()
    );
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
