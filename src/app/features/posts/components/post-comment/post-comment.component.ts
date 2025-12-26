import {Component, Input} from '@angular/core';
import {Comment} from '../../../../core/model/comment/comment';

@Component({
  selector: 'app-post-comment',
  standalone: true,
  imports: [],
  templateUrl: './post-comment.component.html',
  styleUrl: './post-comment.component.css'
})
export class PostCommentComponent {
  @Input({required: true}) public comment!: Comment;
}
