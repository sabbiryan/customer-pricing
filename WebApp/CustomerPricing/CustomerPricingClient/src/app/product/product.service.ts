import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from "./product.model";
import { UrlService } from "../services/url.service";

@Injectable({ providedIn: "root" })
export class ProductService {

  private productApi: string;

  constructor(private http: Http, private url: UrlService) {

    this.productApi = this.url.productApi;
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(this.productApi + "?id=" + id)
      .pipe(map((response: Response) => response.json()));
  }

  getEmployee(id: string): Observable<any> {
    return this.http.get(this.productApi + "?id=" + id)
      .pipe(map((response: Response) => response.json()));
  }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.productApi)
      .pipe(map((response: Response) => response.json()));
  }

  createEmployee(department: Product) {
    return this.http.post(this.productApi, department);
  }

  updateEmployee(department: Product) {
    return this.http.put(this.productApi, department);
  }

  //private handleError<T>(operation = 'operation', result?: T) {
  //  return (error: any): Observable<T> => {
     
  //    console.error(error); 

  //    //this.log(`${operation} failed: ${error.message}`);
     
  //    return of(result as T);
  //  };
  //}

}
