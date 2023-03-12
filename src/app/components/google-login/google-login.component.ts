import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    public authService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.authService.Set(user);
      if (this.authService.Get().email !== '') {
        this.router.navigateByUrl('/profile');
      }
    });
  }
}
