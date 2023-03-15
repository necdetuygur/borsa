import { Component } from '@angular/core';
import { BistService } from 'src/app/services/bist.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  f1: any = '';
  constructor(
    public bistService: BistService,
    public portfolioService: PortfolioService
  ) {}
  addPort(hk: string) {
    const hkList = hk.trim().split(',');
    hkList.forEach((item) => {
      this.portfolioService.Add(item);
    });
    this.portfolioService.GetPrices();
  }
  isAddPort(hk: string) {
    return (
      this.portfolioService.Hisses.filter((h: any) =>
        hk.trim().split(',').includes(h.kod)
      ).length < 1
    );
  }
}
