import {Component, Input} from '@angular/core';
import {Comment} from '../../../../core/model/comment/comment';
import {PostCommentComponent} from '../post-comment/post-comment.component';

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
}
