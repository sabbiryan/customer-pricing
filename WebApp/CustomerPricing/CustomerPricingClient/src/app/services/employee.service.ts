import { Injectable } from "@angular/core";

import { Http, Response } from "@angular/http";

import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Employee } from "../models/employee";

import { UrlService } from "../services/url.service";

@Injectable({ providedIn: "root" })

export class EmployeeService {

  private employeeApi: string;

  constructor(private http: Http, private url: UrlService) {

    this.employeeApi = this.url.partyApi;
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(this.employeeApi + "?id=" + id)
      .pipe(map((response: Response) => response.json()));
  }

  getEmployee(id: string): Observable<any> {
    return this.http.get(this.employeeApi + "?id=" + id)
      .pipe(map((response: Response) => response.json()));
  }

  getAllEmployees(): Observable<any> {
    console.log("DepartmentService.getAllDepartments invoked");
    return this.http.get(this.employeeApi)
      .pipe(map((response: Response) => response.json()));
  }

  createEmployee(department: Employee) {
    return this.http.post(this.employeeApi, department);
  }

  updateEmployee(department: Employee) {
    return this.http.put(this.employeeApi, department);
  }

  //private handleError<T>(operation = 'operation', result?: T) {
  //  return (error: any): Observable<T> => {
     
  //    console.error(error); 

  //    //this.log(`${operation} failed: ${error.message}`);
     
  //    return of(result as T);
  //  };
  //}

}
