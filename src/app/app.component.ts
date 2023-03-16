import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 1e3);
  }
}
