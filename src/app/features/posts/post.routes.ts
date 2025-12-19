import {Routes} from '@angular/router';
import {PostsListComponent} from './pages/posts-list/posts-list.component';
import {PostsDetailComponent} from './pages/posts-detail/posts-detail.component';
import {PostLayout} from './layouts/post-layout/post-layout';

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    component: PostLayout,
    children: [
      {path: '', component: PostsListComponent},
      {path: ':id', component: PostsDetailComponent},
    ]},
]
