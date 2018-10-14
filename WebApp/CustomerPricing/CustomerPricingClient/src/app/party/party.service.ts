import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import {Party} from "./party.model";
import {UrlService} from "../services/url.service";


@Injectable({ providedIn: "root" })

export class PartyService {

  private partyApi: string;

  constructor(private http: Http, private url :UrlService) {

    this.partyApi = this.url.partyApi;
  }

  deleteDepartment(id: string): Observable<any> {
    return this.http.delete(this.partyApi + "?id=" + id)
      .pipe(map((response: Response) => response.json()));
    //.pipe(catchError(this.handleError('getDepartment', [])));
  }

  getDepartment(id: string): Observable<any> {
    return this.http.get(this.partyApi + "?id=" + id)
      .pipe(map((response: Response) => response.json()));
    //.pipe(catchError(this.handleError('getDepartment', [])));
  }

  getAllDepartments(): Observable<any> {
    console.log("DepartmentService.getAllDepartments invoked");
    return this.http.get(this.partyApi)
      .pipe(map((response: Response) => response.json()));
    //.pipe(catchError(this.handleError('getAllDepartments', [])));
  }

  createDepartment(department: Party) {
    //console.log(department);
    return this.http.post(this.partyApi, department);
  }

  updateDepartment(department: Party) {
    //console.log(department);
    return this.http.put(this.partyApi, department);
  }

  //private handleError<T>(operation = 'operation', result?: T) {
  //  return (error: any): Observable<T> => {
     
  //    console.error(error); 

  //    //this.log(`${operation} failed: ${error.message}`);
     
  //    return of(result as T);
  //  };
  //}

}
