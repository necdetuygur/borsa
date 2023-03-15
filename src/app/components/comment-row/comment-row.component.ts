import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: '[app-comment-row]',
  templateUrl: './comment-row.component.html',
  styleUrls: ['./comment-row.component.css'],
})
export class CommentRowComponent {
  @Input() comment: any;
  moment = moment;
}
