import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from "../pages/register/register";
import { SonsProvider } from '../providers/sons/sons';
import { ResponsiblesProvider } from '../providers/responsibles/responsibles';
import { ActivitiesProvider } from '../providers/activities/activities';
import { RegisterTaskPage } from "../pages/registertask/registertask";
import { RegisterActivityPage } from "../pages/register-activity/register-activity";
import { DetailsTaskPage } from "../pages/details-task/details-task";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RegisterTaskPage,
    RegisterActivityPage,
    DetailsTaskPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    RegisterTaskPage,
    RegisterActivityPage,
    DetailsTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SonsProvider,
    ResponsiblesProvider,
    ActivitiesProvider
  ]
})
export class AppModule {}
