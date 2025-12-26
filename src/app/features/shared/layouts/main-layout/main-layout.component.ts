import { Component } from '@angular/core';
import {Navbar} from "../../components/navbar/navbar";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  standalone: true,
    imports: [
        Navbar,
        RouterOutlet
    ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
