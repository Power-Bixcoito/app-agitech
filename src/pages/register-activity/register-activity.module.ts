import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterActivityPage } from './register-activity';

@NgModule({
  declarations: [
    RegisterActivityPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterActivityPage),
  ],
})
export class RegisterActivityPageModule {}
