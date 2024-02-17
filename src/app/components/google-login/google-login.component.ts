declare var google: any;

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css'],
})
export class GoogleLoginComponent {
  private googleClientId: string =
    '643383346665-2inr5rbhle9ggscmvtvcgp6pl48aof3m.apps.googleusercontent.com'; // nc
  // '1006237500352-ofridmlml9v58optus8fntsl7uo8lhfn.apps.googleusercontent.com'; // retrying
  constructor(public authService: AuthService, private router: Router) {}
  async ngOnInit() {
    setTimeout(() => {
      google.accounts.id.initialize({
        client_id: this.googleClientId,
        callback: (res: any) => {
          if (res) {
            const jwt = res?.credential;
            const result = this.authService.parseJwt(jwt);
            const authData = {
              photoUrl: result.picture,
              firstName: result.given_name,
              lastName: result.family_name,
              email: result.email,
            };
            this.authService.Set(authData);
          }
        },
      });
      google.accounts.id.renderButton(
        document.getElementById('googleLoginButton'),
        {
          theme: 'filled_blue',
          size: 'large',
          shape: 'rectangle',
          width: '350',
        }
      );
    }, 1e3);
  }

  async googleSignIn() {}
}
