import {Component, Input} from '@angular/core';
import {Post} from '../../../../core/model/post/post';
import {PostCommentListComponent} from '../post-comment-list/post-comment-list.component';
import {Comment} from '../../../../core/model/comment/comment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-component-detail',
  standalone: true,
  imports: [
    PostCommentListComponent
  ],
  templateUrl: './post-component-detail.component.html',
  styleUrl: './post-component-detail.component.css'
})
export class PostComponentDetailComponent {
  @Input({required: true}) public post!: Post;
  @Input({required: true}) public comments!: Comment[];

  constructor(
    private router: Router,
  ) {}

  public goToUser(id: number) {
    this.router.navigate([`/users/${id}`]);
  }
}
