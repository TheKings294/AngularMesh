import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post, PostsResponse} from '../../../model/post/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllPosts(): Observable<PostsResponse> {
    return this.http.get<PostsResponse>('/posts')
  }

  public getOnePostById(id: number): Observable<Post> {
    return this.http.get<Post>(`/posts/${id}`)
  }
}
