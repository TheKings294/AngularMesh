import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/public-marketing/public.routes')
        .then(r => r.PUBLIC_ROUTES)
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/user.routes')
        .then(r => r.USER_ROUTES)
  },
  {
    path: 'post', loadChildren: () =>
      import('./features/posts/post.routes')
        .then(r => r.POSTS_ROUTES)
  }
];
