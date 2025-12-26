import { Routes } from '@angular/router';
import {NewProductComponent} from './features/product/pages/new-product/new-product.component';
import {UpdateProductComponent} from './features/product/pages/update-product/update-product.component';
import {ProductsListComponent} from './features/product/pages/products-list/products-list.component';
import {ProductDetailComponent} from './features/product/pages/product-detail/product-detail.component';
import {UsersListComponent} from './features/users/pages/users-list/users-list.component';
import {MainLayoutComponent} from './features/shared/layouts/main-layout/main-layout.component';
import {authGuard} from './core/guards/auth/auth.guard';
import {PostsListComponent} from './features/posts/pages/posts-list/posts-list.component';
import {PostsDetailComponent} from './features/posts/pages/posts-detail/posts-detail.component';
import {UserDetailComponent} from './features/users/pages/user-detail/user-detail.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/public-marketing/public.routes')
        .then(r => r.PUBLIC_ROUTES)
  },
  {
    path: 'users',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      { path: '', component: UsersListComponent },
      { path: ':id', component: UserDetailComponent },
    ]
  },
  {
    path: 'posts',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      { path: '', component: PostsListComponent },
      { path: ':id', component: PostsDetailComponent }
    ]
  },
  {
    path: 'products',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      { path: '', component: ProductsListComponent },
      { path: ':id', component: ProductDetailComponent },
      { path: 'object/new', component: NewProductComponent },
      { path: 'object/update/:id', component: UpdateProductComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];
