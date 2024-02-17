import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  empty: any = {
    name: '',
    surname: '',
    email: '',
  };
  private user: any = JSON.parse(
    localStorage.getItem('user') || JSON.stringify(this.empty)
  );
  constructor(private router: Router) {}
  Get(): any {
    return this.user;
  }
  Set(user: any) {
    if (user !== null && user !== undefined) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('/profile');
    } else {
      localStorage.setItem('user', JSON.stringify(this.empty));
    }
  }
  LogOut() {
    this.Set(this.empty);
    this.router.navigateByUrl('/login');
  }

  parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }
}
