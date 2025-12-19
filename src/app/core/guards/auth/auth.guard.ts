import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TokenService } from '../../services/storage/token/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const hasToken = !!tokenService.getToken();

  return hasToken ? true : router.parseUrl('/login');
};
