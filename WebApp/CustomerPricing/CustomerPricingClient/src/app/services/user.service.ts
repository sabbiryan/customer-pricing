import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlService } from '../services/url.service';
import { User } from '../models/user';

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient, private url: UrlService) { }

  getAll() {
    return this.http.get<User[]>(`${this.url.userApi}`);
  }
}
