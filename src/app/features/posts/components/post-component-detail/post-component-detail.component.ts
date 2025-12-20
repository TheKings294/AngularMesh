import {Component, Input} from '@angular/core';
import {Post} from '../../../../core/model/post/post';

@Component({
  selector: 'app-post-component-detail',
  standalone: true,
  imports: [],
  templateUrl: './post-component-detail.component.html',
  styleUrl: './post-component-detail.component.css'
})
export class PostComponentDetailComponent {
  @Input({required: true}) public post!: Post;
}
