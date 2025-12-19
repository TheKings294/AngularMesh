import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../../core/services/http/post/post.service';
import {Post} from '../../../../core/model/post/post';
import {Router} from '@angular/router';
import {PostComponentListComponent} from '../../components/post-component-list/post-component-list.component';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [
    PostComponentListComponent
  ],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})

export class PostsListComponent implements OnInit {
  public posts: Post[] = [];

  constructor(
    private httpService: PostService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.httpService.getAllPosts().subscribe({
      next: data => {
        this.posts = data.posts
      },
      error: error => console.log(error)
    })
  }
}
