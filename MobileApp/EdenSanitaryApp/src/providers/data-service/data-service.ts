import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {
  public contactsFilePath: string = './assets/data/contacts.json';
  constructor(public http: HttpClient) {
    console.log('Hello DataServiceProvider Provider');
  }

  // public getContacts(): Promise<Object> {
  //   return this.http.get(this.contactsFilePath)
  //     .toPromise()
  //     .then((response:any) => {
  //       return response.json();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
}
