import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'post', loadChildren: () =>
      import('./features/posts/post.routes')
        .then(r => r.POSTS_ROUTES)
  }
];
