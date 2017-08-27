import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
<<<<<<< HEAD
import { LoginPage } from "../pages/login/login";
import { TransactionPage } from '../pages/transaction/transaction';
=======
>>>>>>> cd46d55745cf841aa3d861c7d45d3ad226be101b

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SonsProvider } from '../providers/sons/sons';
import { ResponsiblesProvider } from '../providers/responsibles/responsibles';
import { ActivitiesProvider } from '../providers/activities/activities';
import { AuthProvider } from '../providers/auth/auth';

declare var rechargeAmount: 100

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
<<<<<<< HEAD
    LoginPage,
    RegisterPage,
    TransactionPage
=======
>>>>>>> cd46d55745cf841aa3d861c7d45d3ad226be101b
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
<<<<<<< HEAD
    LoginPage,
    RegisterPage,
    TransactionPage
=======
>>>>>>> cd46d55745cf841aa3d861c7d45d3ad226be101b
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SonsProvider,
    ResponsiblesProvider,
    ActivitiesProvider,
    AuthProvider
  ]
})
export class AppModule {}
