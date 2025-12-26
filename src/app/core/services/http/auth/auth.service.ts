import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { TokenService } from '../../storage/token/token.service';

export interface LoginRequest {
  username: string;
  password: string;
  remember?: boolean;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  gender: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly tokenService: TokenService,
  ) {}

  login(body: LoginRequest): Observable<LoginResponse> {
    const { remember, ...payload } = body;
    return this.http
      .post<LoginResponse>('https://dummyjson.com/auth/login', payload)
      .pipe(tap((response) => this.tokenService.setToken(response.token, !!remember)));
  }

  logout(): void {
    this.tokenService.clear();
  }
}
