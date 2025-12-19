import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, LoginRequest } from '../../../../core/services/http/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage: string | null = null;
  loading = false;
  form: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }>;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
  ) {
    this.form = this.fb.nonNullable.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false],
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = null;

    const payload: LoginRequest = {
      ...this.form.getRawValue(),
    };

    this.authService.login(payload).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        this.loading = false;
        const fallback = 'Login failed. Please verify your credentials.';
        this.errorMessage = err?.error?.message ?? err?.message ?? fallback;
      },
    });
  }
}
