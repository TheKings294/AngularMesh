import {Component, Input} from '@angular/core';
import {Comment} from '../../../../core/model/comment/comment';
import {PostCommentComponent} from '../post-comment/post-comment.component';
import {CommentService} from '../../../../core/services/http/comment/comment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-comment-list',
  standalone: true,
  imports: [
    PostCommentComponent
  ],
  templateUrl: './post-comment-list.component.html',
  styleUrl: './post-comment-list.component.css'
})
export class PostCommentListComponent {
  @Input({required: true}) public comments!: Comment[];

  constructor(
    private router: Router,
  ) { }

  public goToUser(id: number) {
    this.router.navigate([`/users/${id}`]);
  }
}
