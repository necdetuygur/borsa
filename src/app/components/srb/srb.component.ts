import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-srb',
  templateUrl: './srb.component.html',
  styleUrls: ['./srb.component.css'],
})
export class SrbComponent {
  modalSrb: any;
  ngOnInit() {
    this.modalSrb = new bootstrap.Modal('#modalSrb');
  }
}
