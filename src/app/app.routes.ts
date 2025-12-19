import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/public-marketing/public.routes').then(
        (m) => m.PUBLIC_ROUTES
      ),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./features/posts/post.routes').then((m) => m.POST_ROUTES),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/user.routes').then((m) => m.USER_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
