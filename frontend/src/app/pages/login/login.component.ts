import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    email: 'brewandleaf@gmail.com',
    password: ''
  };
  error = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(): void {
    this.apiService.login(this.credentials).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        this.error = 'Invalid email or password';
      }
    });
  }
}
