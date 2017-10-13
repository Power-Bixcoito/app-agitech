import { AuthProvider } from './../providers/auth/auth';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SonsProvider } from '../providers/sons/sons';
import { ResponsiblesProvider } from '../providers/responsibles/responsibles';
import { ActivitiesProvider } from '../providers/activities/activities';
import { AgilitasProvider } from '../providers/agilitas/agilitas';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SonsProvider,
    ResponsiblesProvider,
    ActivitiesProvider,
    AgilitasProvider,
    AuthProvider
  ]
})
export class AppModule { }
