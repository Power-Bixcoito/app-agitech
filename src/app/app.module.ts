import { AuthProvider } from './../providers/auth/auth';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { TransactionPage } from '../pages/transaction/transaction';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SonsProvider } from '../providers/sons/sons';
import { ResponsiblesProvider } from '../providers/responsibles/responsibles';
import { ActivitiesProvider } from '../providers/activities/activities';
import { AgilitasProvider } from '../providers/agilitas/agilitas';
import { RegisterTaskPage } from '../pages/registertask/registertask';
import { RegisterActivityPage } from "../pages/register-activity/register-activity";
import { DetailsTaskPage } from "../pages/details-task/details-task";
import { RegisterPage } from "../pages/register/register";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RegisterPage,
    RegisterTaskPage,
    RegisterActivityPage,
    DetailsTaskPage
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
    RegisterPage,
    RegisterTaskPage,
    RegisterActivityPage,
    DetailsTaskPage
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
