import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css'],
})
export class GoogleLoginComponent {
  constructor(public authService: AuthService, private router: Router) {}
  ngOnInit() {
    GoogleAuth.initialize({
      clientId:
        '643383346665-2inr5rbhle9ggscmvtvcgp6pl48aof3m.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
      grantOfflineAccess: true,
    });
  }

  async googleSignIn() {
    let googleUser = await GoogleAuth.signIn();
    let u: any = {};
    u.email = googleUser.email;
    u.photoUrl = googleUser.imageUrl;
    u.firstName = googleUser.givenName;
    u.lastName = googleUser.familyName;
    this.authService.Set(u);
    if (this.authService.Get().email !== '') {
      this.router.navigateByUrl('/profile');
    }
  }
}
