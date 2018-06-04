import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  private backendUrl = 'http://127.0.0.1/angular_php/api/employees/';

  constructor(
    // @Inject('baseUri')
    // private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/',
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    const url = `${this.backendUrl}all/`;
    return this.http.get<Employee[]>(url);
  }

  getEmployee(id): Observable<Employee> {
    const url = `${this.backendUrl}detail/${id}/`;
    return this.http.get<Employee>(url);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.backendUrl}insert/`;
    return this.http.post<Employee>(url, employee);
  }

  deleteEmployee(id): Observable<Employee> {
    const url = `${this.backendUrl}delete/`;
    return this.http.post<Employee>(url, { 'id': id });
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.backendUrl}edit/`;
    return this.http.post<Employee>(url, employee);
  }
}
