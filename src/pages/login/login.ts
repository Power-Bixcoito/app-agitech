import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  registrarPage = RegisterPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  login() { 
    this.navCtrl.setRoot(TabsPage)
  }
  
  register() { 
    this.navCtrl.setRoot(this.registrarPage);
  }
}
