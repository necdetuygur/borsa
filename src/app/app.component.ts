import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  constructor(private socialAuthService: SocialAuthService) {}
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
    });
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }
}
