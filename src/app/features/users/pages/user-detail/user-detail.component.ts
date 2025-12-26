import {Component, OnInit} from '@angular/core';
import {User} from '../../../../core/model/user/user';
import {Post, PostsResponse} from '../../../../core/model/post/post';
import {UserService} from '../../../../core/services/http/user/user.service';
import {PostService} from '../../../../core/services/http/post/post.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PostComponentListComponent} from '../../../posts/components/post-component-list/post-component-list.component';
import {DatePipe, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    PostComponentListComponent,
    TitleCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public user!: User;
  public postsResponse!: PostsResponse;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute,
  ) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.userService.getUserById(id).subscribe(user => {
        this.user = user;
      })
      this.postService.getPostsOfOneUserById(id).subscribe(posts => {
        this.postsResponse = posts;
      })
    })
  }
}
