import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./components/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/google-login/google-login.component').then(
        (m) => m.GoogleLoginComponent
      ),
  },
  {
    path: 'detail/:code',
    loadChildren: () =>
      import('./components/detail/detail.component').then(
        (m) => m.DetailComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
