import { HttpInterceptorFn } from '@angular/common/http';
import {environment} from '../../../../environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('http://') || req.url.startsWith('https://')) {
    return next(req)
  }

  const apiUrl = req.clone({
    url: `${environment.baseUrl}${req.url}`,
  })

  return next(apiUrl);
};
