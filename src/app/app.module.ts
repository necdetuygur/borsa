import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CustomClearPipe } from './pipes/custom-clear.pipe';

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
    CustomClearPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
