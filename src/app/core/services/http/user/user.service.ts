import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User, UsersResponse} from '../../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public getUsers(page: number, pageSize: number): Observable<UsersResponse> {
    const skip = (page - 1) * pageSize;
    return this.http
      .get<UsersResponse>('https://dummyjson.com/users', {
        params: {
          limit: pageSize,
          skip,
        },
      });
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`https://dummyjson.com/users/${id}`);
  }
}
