import { Routes } from '@angular/router';
import {NewProductComponent} from './features/product/pages/new-product/new-product.component';
import {UpdateProductComponent} from './features/product/pages/update-product/update-product.component';
import {ProductsListComponent} from './features/product/pages/products-list/products-list.component';
import {ProductDetailComponent} from './features/product/pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: 'post', loadChildren: () =>
      import('./features/posts/post.routes')
        .then(r => r.POSTS_ROUTES)
  },
  {path: 'products/new', component: NewProductComponent},
  {path: 'products/update/:id', component: UpdateProductComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
];
