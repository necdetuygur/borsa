import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  public Hisses = JSON.parse('' + localStorage.getItem('Hisse')) || [];
  public Loading = false;

  constructor() {}
  public Add(hk: string) {
    if (
      this.Hisses.filter((hisse: any) => hisse.kod === hk).length > 0 ||
      hk.length < 3
    ) {
      return;
    }

    this.Hisses.push({
      id: new Date().getTime() + ~~(Math.random() * 999 + 1000),
      kod: hk,
      fiyat: '0,0',
      yuzde: '0,0%',
    });
    this.Hisses = this.Hisses.sort((a: any, b: any) => {
      if (a.kod > b.kod) return 1;
      if (a.kod < b.kod) return -1;
      return 0;
    });
    localStorage.setItem('Hisse', JSON.stringify(this.Hisses));
  }

  public GetPrices() {
    this.Loading = true;
    let gets: any[] = [];
    this.Hisses.forEach(async (hisse: any) => {
      gets.push(axios.get('https://hisse.vercel.app/?q=' + hisse.kod));
    });
    Promise.all(gets).then((datas: any[]) => {
      this.Hisses.forEach((hisse: any, index: number) => {
        const data = ('' + datas[index].data).replace('.', ',').split('|');
        hisse.fiyat = data[0];
        hisse.yuzde = data[1];
      });
      this.Loading = false;
      localStorage.setItem('Hisse', JSON.stringify(this.Hisses));
    });
  }

  public async GetPrice(kod: string) {
    const data = (
      await (
        await axios.get('https://hisse.vercel.app/?q=' + kod)
      ).data
    ).split('|');
    return {
      fiyat: data[0],
      yuzde: data[1],
    };
  }

  public Remove(id: number) {
    if (!confirm('Emin misiniz?')) return;
    this.Hisses = this.Hisses.filter((hisse: any) => hisse.id != id);
    localStorage.setItem('Hisse', JSON.stringify(this.Hisses));
  }
}
