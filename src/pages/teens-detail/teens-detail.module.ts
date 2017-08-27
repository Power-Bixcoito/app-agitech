import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeensDetailPage } from './teens-detail';

@NgModule({
  declarations: [
    TeensDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TeensDetailPage),
  ],
})
export class TeensDetailPageModule {}
