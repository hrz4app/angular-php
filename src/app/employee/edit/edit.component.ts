import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee = new Employee();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,    
    private employeeService: EmployeeService,
  ) { }

  ngOnInit() {
    this.getEmployee(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getEmployee(id): void {
    this.employeeService.getEmployee(id).subscribe(
      employee => this.employee = employee
    );
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee).subscribe(
      () => this.goBack()
    );
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
