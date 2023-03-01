import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'finance-app',
  webDir: 'dist/finance-app',
  bundledWebRuntime: false,
  server: {
    url:'http://192.168.0.107:4200',
    cleartext: true
  }
};

export default config;
