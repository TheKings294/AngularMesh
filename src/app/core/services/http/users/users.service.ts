import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  role?: string;
  company?: { name?: string };
}

interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  getUsers(page: number, pageSize: number): Observable<UsersResponse> {
    const skip = (page - 1) * pageSize;
    return this.http
      .get<UsersResponse>('https://dummyjson.com/users', {
        params: {
          limit: pageSize,
          skip,
        },
      });
  }
}
