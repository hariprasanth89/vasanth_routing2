import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[] = [];
  constructor(private http: HttpClient) { }

  getUsers(pagenumber: any, pagesize: any): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users', {
      params: {
        page: pagenumber,
        per_page: pagesize
      }
    });
  }
}
