import { Component, Input } from '@angular/core';
import axios from 'axios';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  API_URL = 'https://borsa-db.vercel.app';
  moment = moment;

  comments: any = [];

  constructor(public authService: AuthService) {}

  async ngOnInit() {
    moment.locale('tr');
    await this.getComments();
  }
  async getComments() {
    const res = await axios.get(
      this.API_URL + '/CommentByEmail/' + this.authService.Get().email
    );
    const dataSorted = res.data.sort((a: any, b: any) => {
      if (a.DateTime > b.DateTime) return -1;
      if (a.DateTime < b.DateTime) return 1;
      return 0;
    });
    this.comments = dataSorted;
  }
}
