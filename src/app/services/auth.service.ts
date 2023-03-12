import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  empty: SocialUser = {
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
  private user: SocialUser = JSON.parse(
    localStorage.getItem('user') || JSON.stringify(this.empty)
  );
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}
  Get(): SocialUser {
    return this.user;
  }
  Set(user: SocialUser) {
    if (user !== null && user !== undefined) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.setItem('user', JSON.stringify(this.empty));
    }
  }
  LogOut() {
    this.Set(this.empty);
    this.socialAuthService.signOut();
    this.router.navigateByUrl('/login');
  }
}
