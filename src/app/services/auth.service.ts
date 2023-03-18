import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  empty: any = {
    email: '',
    provider: '',
    id: '',
    name: '',
    photoUrl: '',
    firstName: '',
    lastName: '',
    authToken: '',
    idToken: '',
    authorizationCode: '',
    response: undefined,
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
    } else {
      localStorage.setItem('user', JSON.stringify(this.empty));
    }
  }
  LogOut() {
    this.Set(this.empty);
    this.router.navigateByUrl('/login');
  }
}
