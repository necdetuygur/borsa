import { Component } from '@angular/core';
import axios from 'axios';
import * as moment from 'moment';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  API_URL = 'https://borsa-db.vercel.app';
  CURRENT_CODE = 'SAHOL';
  comment = '';
  comments: any = [];
  async ngOnInit() {
    await this.getComments();
  }
  commentTxtChange(e: any) {
    this.comment = e.target.value;
  }
  async getComments() {
    const res = await axios.get(
      this.API_URL + '/CommentByCode/' + this.CURRENT_CODE
    );
    this.comments = res.data;
  }
  async submitComment() {
    const data: Comment = {
      NameSurname: 'Necdet UYGUR',
      Picture: 'Necdet UYGUR',
      Email: 'necdet.uygur@gmail.com',
      Code: 'SAHOL',
      Content: this.comment,
      DateTime: moment().format(),
    };
    await axios.post(this.API_URL + '/Comment', data);
    this.getComments();
    this.comment = '';
  }
}
