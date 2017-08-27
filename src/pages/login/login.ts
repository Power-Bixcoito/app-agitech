import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { store_data, remove_data, get_data } from '../../utils/localStorage'

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
  registrarPage = 'RegisterPage';
  email;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider
  ) { }

  ionViewDidLoad() {
    if (get_data('user'))
      this.navCtrl.setRoot(TabsPage)
  }

  login() {
    if (!this.email || !this.password) {
      alert("Digite o email e a senha para continuar!");
      return;
    }
    let user = { email: this.email, password: this.password };
    this.auth.login(user).subscribe((res) => {
      if (!res) return;
      store_data(res, 'user')
      this.navCtrl.setRoot(TabsPage)
    }, err => alert(err.json().message || 'Problema ao conectar com servidor.'))
  }

  register() {
    this.navCtrl.setRoot(this.registrarPage);
  }
}
