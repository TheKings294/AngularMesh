import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentPostResponse} from '../../../model/comment/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient,
  ) { }

  public getCommentOfPost(id: number): Observable<CommentPostResponse> {
    return this.http.get<CommentPostResponse>(`/comments/post/${id}`)
  }
}
