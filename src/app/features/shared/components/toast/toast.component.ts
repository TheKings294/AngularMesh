import { Component, signal } from '@angular/core';
import {NgClass} from '@angular/common';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  visible = signal(false);
  message = signal('');
  type = signal<ToastType>('info');

  show(message: string, type: ToastType = 'info', duration = 3000) {
    this.message.set(message);
    this.type.set(type);
    this.visible.set(true);

    setTimeout(() => {
      this.visible.set(false);
    }, duration);
  }

}
