import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../../core/services/http/post/post.service';
import {Post} from '../../../../core/model/post/post';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../../../core/services/http/comment/comment.service';
import type {Comment} from '../../../../core/model/comment/comment';
import {PostComponentDetailComponent} from '../../components/post-component-detail/post-component-detail.component';
import {PostCommentListComponent} from '../../components/post-comment-list/post-comment-list.component';

@Component({
  selector: 'app-posts-detail',
  standalone: true,
  imports: [
    PostComponentDetailComponent,
    PostCommentListComponent
  ],
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit {
  public post!: Post;
  public comment!: Comment[];
  public errorMessage: string[] = [];

  constructor(
    private httpServicePost: PostService,
    private httpServiceComment: CommentService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.httpServicePost.getOnePostById(id).subscribe({
        next: post => this.post = post,
        error: err =>  this.errorMessage.push(err.message),
      })
      this.httpServiceComment.getCommentOfPost(id).subscribe({
        next: data => this.comment = data.comments,
        error: err =>  this.errorMessage.push(err.message),
      })
    })
  }
}
