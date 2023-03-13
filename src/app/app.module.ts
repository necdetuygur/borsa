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
import { CommentComponent } from './components/comment/comment.component';
import { GoogleLoginComponent } from './components/google-login/google-login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { TradingviewComponent } from './components/tradingview/tradingview.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    GoogleLoginComponent,
    ProfileComponent,
    HeaderComponent,
    HomeComponent,
    DetailComponent,
    TradingviewComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    AppRoutingModule,
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