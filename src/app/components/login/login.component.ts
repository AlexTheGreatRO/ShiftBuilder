import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FirestoreService } from 'src/app/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message = '';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    public authService: AuthService,
    public fireStoreService: FirestoreService,
    private router: Router
  ) {}

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  async login() {
    try {
      const email = this.email.value;
      const password = this.password.value;
      await this.authService.logIn(email, password);
      this.message = 'Login successful, redirecting...';
      setTimeout(() => {
        this.router.navigate(['']);
      }, 1500);
    } catch (err) {
      this.message = 'Login failed!';
      this.password.setValue('');
      this.password.markAsUntouched();
    }
  }
  ngOnInit(): void {}
}
