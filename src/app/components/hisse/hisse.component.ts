import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
import * as bootstrap from 'bootstrap';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hisse',
  templateUrl: './hisse.component.html',
  styleUrls: ['./hisse.component.css'],
})
export class HisseComponent {
  constructor(public portfolioService: PortfolioService) {}
  aktar = 'Dışa';
  modalAktar: any;
  aktarData = '';
  ngOnInit() {
    this.modalAktar = new bootstrap.Modal('#modalAktar');
    this.portfolioService.GetPrices();
  }
  async disaAktar() {
    this.aktarData = this.portfolioService.Hisses.map((hisse: any) => hisse.kod)
      .join('\n')
      .trim();
    this.aktar = 'Dışa';
    this.modalAktar.show();

    await Share.share({
      text: this.aktarData,
    });
  }
  iceAktar() {
    this.aktarData = '';
    this.aktar = 'İçe';
    this.modalAktar.show();
  }
  aktarDataKopyala() {
    const aktarDataTxt =
      document.querySelector<HTMLTextAreaElement>('#aktarDataTxt');
    aktarDataTxt?.focus();
    aktarDataTxt?.select();
    document.execCommand('copy');
  }
  iceAktarmaBaslat() {
    const aktarDataTxt =
      document.querySelector<HTMLTextAreaElement>('#aktarDataTxt');
    aktarDataTxt?.value
      .trim()
      .split('\n')
      .forEach((hk: string) => {
        this.portfolioService.Add(hk.trim().toUpperCase());
      });
    this.portfolioService.GetPrices();
    this.modalAktar.hide();
  }
}
