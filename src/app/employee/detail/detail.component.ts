import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

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

  goBack() {
    this.router.navigate(['/home']);
  }

}
