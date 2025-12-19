import { Component } from '@angular/core';
import {Navbar} from '../../../shared/components/navbar/navbar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-post-layout',
  standalone: true,
  imports: [
    Navbar,
    RouterOutlet
  ],
  templateUrl: './post-layout.html',
  styleUrl: './post-layout.css',
})
export class PostLayout {

}
