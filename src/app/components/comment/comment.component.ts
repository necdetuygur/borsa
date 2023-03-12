import { Component, Input } from '@angular/core';
import axios from 'axios';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  API_URL = 'https://borsa-db.vercel.app';
  @Input() code!: string;
  moment = moment;
  comment = '';
  comments: any = [];
  constructor(public authService: AuthService) {}
  async ngOnInit() {
    moment.locale('tr');
    await this.getComments();
  }
  commentTxtChange(e: any) {
    this.comment = e.target.value;
  }
  async getComments() {
    const res = await axios.get(this.API_URL + '/CommentByCode/' + this.code);
    const dataSorted = res.data.sort((a: any, b: any) => {
      if (a.DateTime > b.DateTime) return -1;
      if (a.DateTime < b.DateTime) return 1;
      return 0;
    });
    this.comments = dataSorted;
  }
  async submitComment() {
    const data: Comment = {
      NameSurname:
        this.authService.Get().firstName +
        ' ' +
        this.authService.Get().lastName,
      Picture: this.authService.Get().photoUrl,
      Email: this.authService.Get().email,
      Code: this.code,
      Content: this.comment,
      DateTime: moment().format(),
    };
    await axios.post(this.API_URL + '/Comment', data);
    this.getComments();
    this.comment = '';
  }
}
