import { Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { authGuard } from '../../core/guards/auth/auth.guard';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UsersListComponent,
    canActivate: [authGuard],
  },
  {
    path: ':id',
    component: UserDetailComponent,
    canActivate: [authGuard],
  },
];
