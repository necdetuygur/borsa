import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleSigninButtonModule,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [AppComponent, CommentComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '643383346665-2inr5rbhle9ggscmvtvcgp6pl48aof3m.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
