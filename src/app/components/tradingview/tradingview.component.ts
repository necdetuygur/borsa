import { Component, Input } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'app-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.css'],
})
export class TradingviewComponent {
  @Input() code: string = '';
  constructor() {}
  ngOnInit() {
    new TradingView.widget({
      symbol: 'BIST:' + this.code,
      width: '100%',
      height: '500',
      container_id: 'tradingview_7f159',

      timezone: 'Europe/Istanbul',
      theme: 'dark',
      style: '1',
      locale: 'tr',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      hide_top_toolbar: true,
      withdateranges: true,
      range: '1D',
      hide_side_toolbar: false,
      details: true,
    });
  }
}
