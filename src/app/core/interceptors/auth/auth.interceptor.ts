import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../../services/storage/token/token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(TokenService).getToken();
  const isDummyJson = req.url.includes('dummyjson.com');

  // Skip adding auth for the public DummyJSON API to avoid CORS issues.
  if (!token || isDummyJson) {
    return next(req);
  }

  const requestWithAuth = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });

  return next(requestWithAuth);
};
