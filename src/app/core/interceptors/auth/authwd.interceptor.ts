import { HttpInterceptorFn } from '@angular/common/http';

export const authwdInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
