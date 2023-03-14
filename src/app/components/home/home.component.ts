import { Component } from '@angular/core';
import { BistService } from 'src/app/services/bist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  f1: any = '';
  constructor(public bistService: BistService) {}
}
