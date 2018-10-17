import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import {PartyPricing} from "./party-pricing.model";
import {UrlService} from "../services/url.service";


@Injectable({ providedIn: "root" })

export class PartyPricingService {

  private partyPricingApi: string;

  constructor(private http: HttpClient, private url: UrlService) {

    this.partyPricingApi = this.url.partyPricingApi;
  }

  deleteDepartment(id: string): Observable<any> {
    return this.http.delete(this.partyPricingApi + "?id=" + id)
      .pipe(map((response: Response) => response.json()));
    //.pipe(catchError(this.handleError('getDepartment', [])));
  }

  getDepartment(id: string): Observable<any> {
    return this.http.get(this.partyPricingApi + "?id=" + id)
      .pipe(map((response: Response) => response.json()));
    //.pipe(catchError(this.handleError('getDepartment', [])));
  }

  getAllDepartments(): Observable<any> {
    return this.http.get(this.partyPricingApi);
      //.pipe(map((response: Response) => response.json()));
    //.pipe(catchError(this.handleError('getAllDepartments', [])));
  }

  createDepartment(department: PartyPricing) {
    //console.log(department);
    return this.http.post(this.partyPricingApi, department);
  }

  updateDepartment(department: PartyPricing) {
    //console.log(department);
    return this.http.put(this.partyPricingApi, department);
  }

  //private handleError<T>(operation = 'operation', result?: T) {
  //  return (error: any): Observable<T> => {
     
  //    console.error(error); 

  //    //this.log(`${operation} failed: ${error.message}`);
     
  //    return of(result as T);
  //  };
  //}

}
