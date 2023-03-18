import { Component } from '@angular/core';
import {
  AdMob,
  BannerAdOptions,
  BannerAdSize,
  BannerAdPosition,
} from '@capacitor-community/admob';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 1e3);
  }

  async ngOnInit() {
    const deviceInfo = await Device.getInfo();
    if (deviceInfo.platform !== 'web') {
      AdMob.initialize({
        requestTrackingAuthorization: true,
        testingDevices: [''],
        initializeForTesting: false,
      });

      const admobOptions: BannerAdOptions = {
        adId: 'ca-app-pub-1862541363203489/1197491394',
        adSize: BannerAdSize.BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: false,
        // npa: true
      };
      AdMob.showBanner(admobOptions);
    }
  }
}
