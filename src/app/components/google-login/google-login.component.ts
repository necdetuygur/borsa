import { Component } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css'],
})
export class GoogleLoginComponent {
  constructor(
    private socialAuthService: SocialAuthService,
    public authService: AuthService
  ) {}
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.authService.Set(user);
    });
  }
}
