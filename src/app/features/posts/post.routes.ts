import { Routes } from '@angular/router';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostsDetailComponent } from './pages/posts-detail/posts-detail.component';
import { authGuard } from '../../core/guards/auth/auth.guard';

export const POST_ROUTES: Routes = [
  {
    path: '',
    component: PostsListComponent,
    canActivate: [authGuard],
  },
  {
    path: ':id',
    component: PostsDetailComponent,
    canActivate: [authGuard],
  },
];
