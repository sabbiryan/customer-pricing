//import { Injectable } from '@angular/core';
//import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
//import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
      debugger;
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}
