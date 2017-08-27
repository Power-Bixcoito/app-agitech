import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeTeenPage } from './home-teen';

@NgModule({
  declarations: [
    HomeTeenPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeTeenPage),
  ],
})
export class HomeTeenPageModule {}
