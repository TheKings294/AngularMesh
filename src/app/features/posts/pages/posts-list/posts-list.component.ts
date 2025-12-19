import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../../core/services/http/post/post.service';
import {Post} from '../../../../core/model/post/post';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})

export class PostsListComponent implements OnInit {
  public posts: Post[] = [];

  constructor(
    private httpService: PostService
  ) {
  }

  ngOnInit() {
    this.httpService.getAllPosts().subscribe({
      next: data => {
        this.posts = data.posts
        console.log(this.posts);
      },
      error: error => console.log(error)
    })
  }
}
