import {Component, Input} from '@angular/core';
import {Post} from '../../../../core/model/post/post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-component-list',
  standalone: true,
  imports: [],
  templateUrl: './post-component-list.component.html',
  styleUrl: './post-component-list.component.css'
})
export class PostComponentListComponent {
  @Input({required: true}) post!: Post;

  constructor(
    private router: Router
  ) { }

  public onClickForPostDetail(id: number): void {
    this.router.navigate([`/post/${id}`]);
  }
}
