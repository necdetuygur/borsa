import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FilterBistDataPipe } from './pipes/filter-bist-data.pipe';
import { MyCommentsComponent } from './components/my-comments/my-comments.component';
import { HisseComponent } from './components/hisse/hisse.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CommentRowComponent } from './components/comment-row/comment-row.component';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    FilterBistDataPipe,
    MyCommentsComponent,
    HisseComponent,
    LoadingComponent,
    CommentRowComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
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
              // '643383346665-2inr5rbhle9ggscmvtvcgp6pl48aof3m.apps.googleusercontent.com' // Web
              '643383346665-g48jiq86fgl5g2djtl9mig7tu5hc8hrd.apps.googleusercontent.com' // Mobile
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
