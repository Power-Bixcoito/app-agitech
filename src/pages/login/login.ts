import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { TabsPage } from "../tabs/tabs";
import { store_data, remove_data } from '../../utils/localStorage'

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
    remove_data('user')
    let user = {
      id: 1
    }
    store_data(user, 'user')
    this.navCtrl.setRoot(TabsPage)
  }
  
  register() { 
    this.navCtrl.setRoot(this.registrarPage);
  }
}
