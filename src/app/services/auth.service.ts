import { SocialUser } from '@abacritt/angularx-social-login';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: SocialUser = JSON.parse(localStorage.getItem('user') || '{}');
  constructor() {}
  Get(): SocialUser {
    return this.user;
  }
  Set(user: SocialUser) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(this.user));
  }
  LogOut() {
    const empty: SocialUser = {
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
    this.Set(empty);
  }
}
