import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BistService } from 'src/app/services/bist.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  loaded = false;
  code = '';
  detail: any;
  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    public bistService: BistService,
    public portfolioService: PortfolioService
  ) {}
  async ngOnInit() {
    this.code = '' + this.route.snapshot.paramMap.get('code');
    this.detail = this.bistService.Data.find(
      (item: any) => item.Code === this.code
    );
    const price = await this.portfolioService.GetPrice(this.code);
    this.detail = {
      ...this.detail,
      ...price,
    };
    this.loaded = true;
  }
}
