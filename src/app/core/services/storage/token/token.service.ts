import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly storageKey = 'mesh-auth-token';

  setToken(token: string, remember = false): void {
    const target = remember ? localStorage : sessionStorage;
    target.setItem(this.storageKey, token);
    (remember ? sessionStorage : localStorage).removeItem(this.storageKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.storageKey) ?? sessionStorage.getItem(this.storageKey);
  }

  clear(): void {
    localStorage.removeItem(this.storageKey);
    sessionStorage.removeItem(this.storageKey);
  }
}
