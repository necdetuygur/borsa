import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-uygulamalar',
  templateUrl: './uygulamalar.component.html',
  styleUrls: ['./uygulamalar.component.css'],
})
export class UygulamalarComponent {
  uygulamalar = [
    {
      re: 'https://lh3.googleusercontent.com/BD5xW_NPxo1M-_rgk2YhwHG6FeuDiWGsRSKJgwXtV-Xm9RDzXxT2o4R-EjOf2XQesyw',
      ad: 'Altın Döviz Borsa Fiyatları',
      id: 'com.necdetuygur.adbf',
      ac: 'Piyasadaki şu anki altın, döviz ve borsa fiyatlarını gösteren mobil uygulamadır.',
    },
    {
      re: 'https://lh3.googleusercontent.com/gAT6QOq2QaK3kq69Yp9PDr_0wofha-igcHT6qwgvdyFBKdZ0aBiZAVD93-S7PaFItp6g',
      ad: 'Borsa',
      id: 'com.necdetuygur.borsa',
      ac: 'BİST fiyatları gösterme ve kullanıcı hisse senedi yorumlama uygulamasıdır.',
    },
    {
      re: 'https://lh3.googleusercontent.com/NROg-9sa9ihFwFduNQxFgaHnHGJb4yEIWu7IeWdRRC9qWYKTFG6XgN_zAriYBaGdzo1u',
      ad: 'Durağa Yaklaşan Otobüsler',
      id: 'com.meftuntech.edyo',
      ac: 'İzmir otobüs duraklarına yaklaşan otobüsleri ve kaç durak kaldığı mesafe bilgisiniz gösteren mobil uygulamadır.',
    },
    {
      re: 'https://lh3.googleusercontent.com/dZ2b0fPBgyl3RH_idFEtfnMSPicv7-Do7QVn53mWlGtbPAgJSRYE1KsLCGclXBrFAmw',
      ad: 'Hesabım',
      id: 'com.meftuntech.hesabim',
      ac: 'Kişisel ya da kurumsal gelir ve gider maliyet hesabınızı yapabileceğiniz bir uygulamadır.',
    },
    {
      re: 'https://lh3.googleusercontent.com/OYM1GAByHqyhJIpMTdfukzfi4-CCnEisX34nIXfnx1lmSK_wvjYNbdbxDqdKx0-BmZk',
      ad: 'Kâr Hesaplayıcı',
      id: 'com.meftuntech.kh',
      ac: 'Fiyatı ve maliyeti belli olan yatırımızın, kârını hesaplayan mobil uygulamadır.',
    },
    {
      re: 'https://lh3.googleusercontent.com/4163jcr2vU0c-CtNRkgrBAStTLJjwVpaf0ea5AsSSRPLeFPvDqUonGY3zzU_ygb4afc',
      ad: 'Not Defteri',
      id: 'com.necdetuygur.notdefteri',
      ac: 'Not Defteri, kullanıcı dostu arayüzü ve işlevsel özellikleriyle, herhangi bir yerde herhangi bir zamanda notlarınızı almanızı sağlıyor ve bu notları istediğiniz zaman düzenleyebilmenize olanak tanıyor.',
    },
    {
      re: 'https://lh3.googleusercontent.com/KzvnVixhX9nJ6lZHzVSqgFGUJjs0PX12g_FgU0lhsHsrpTIqHHm7-K_zZH3Rqy52qA',
      ad: 'Sayı Tahmin Oyunu',
      id: 'com.necdetuygur.sayitahmin',
      ac: 'Aklınızdan sıfır ile yüz arasında bir sayı tutun. Tuttuğunuz sayıyı görürseniz "Evet Var" butonuna, görmezseniz "Hayır Yok" butonuna basın.',
    },
    {
      re: 'https://lh3.googleusercontent.com/v-uDqnJXXOOLnGKpq_lWHRFk2T6snBDJ8cPbx71Q3vNOlqNGu68OYB-lA69AHBRprA',
      ad: 'Servis Müşteri Takip',
      id: 'com.meftuntech.servismusteritakip',
      ac: 'Servise gelen müşterilere sıra numarası verip; Geliş, Servis ve Ayrılış sürelerini tanımlayıp gösteren uygulamadır.',
    },
  ];
  modalFaydaliUygulamalar: any;
  ngOnInit() {
    this.modalFaydaliUygulamalar = new bootstrap.Modal(
      '#modalFaydaliUygulamalar'
    );
  }
}
