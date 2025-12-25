import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService, User } from '../../../../core/services/http/users/users.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(private readonly usersService: UsersService) {}

  users: User[] = [];
  loading = true;
  error: string | null = null;
  currentPage = 1;
  pageSize = 10;
  totalUsers = 0;
  searchTerm = '';

  ngOnInit(): void {
    this.loadUsers();
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.totalUsers / this.pageSize));
  }

  get filteredUsers(): User[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.users;
    }
    return this.users.filter((user) => {
      const haystack = [
        user.firstName,
        user.lastName,
        user.username,
        user.email,
        user.phone,
        user.company?.name,
        user.role,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });
  }

  goToPage(page: number): void {
    const nextPage = Math.min(Math.max(page, 1), this.totalPages);
    if (nextPage === this.currentPage) {
      return;
    }
    this.currentPage = nextPage;
    this.loadUsers();
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  private loadUsers(): void {
    this.loading = true;
    this.error = null;

    this.usersService.getUsers(this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        this.users = response.users;
        this.totalUsers = response.total ?? response.users.length;
        this.loading = false;
      },
      error: (err) => {
        this.error =
          err?.error?.message ??
          err?.message ??
          'Failed to load users. Please try again.';
        this.loading = false;
      },
    });
  }
}
