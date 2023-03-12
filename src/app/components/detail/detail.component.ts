import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  code = '';
  constructor(public authService: AuthService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.code = '' + this.route.snapshot.paramMap.get('code');
  }
}
