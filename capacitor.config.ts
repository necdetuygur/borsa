import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.necdetuygur.borsa',
  appName: 'Borsa',
  webDir: 'dist/borsa',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId:
        '643383346665-2inr5rbhle9ggscmvtvcgp6pl48aof3m.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
