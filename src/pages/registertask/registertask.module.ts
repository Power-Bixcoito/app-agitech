import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterTaskPage } from './registertask';

@NgModule({
  declarations: [
    RegisterTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterTaskPage),
  ],
})
export class RegistertaskPageModule {}
