import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators'; 

import {UrlService} from "../services/url.service";
import {LocalStorageService} from "../services/localstorage.service";


@Injectable({ providedIn: "root" })
export class AuthenticationService {


  constructor(private http: HttpClient, private url: UrlService, private localStorage: LocalStorageService) {
    
  }

  login(username: string, password: string) {
    
    //let body = { username: username, password: password, grant_type: "password" };

    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', "password");

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    let string = body.toString();
    return this.http.post<any>(`${this.url.tokenApi}`, string, options)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user["access_token"]) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.localStorage.setCurrentUser(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    this.localStorage.deleteCurrentUser();
  }
}
