import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { store_data, remove_data, get_data } from '../../utils/localStorage'
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  name: String
  nickname: String
  mail: String
  password: String
  birthday: Date
  gender
  tipo: String = 'responsible'


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
    let user = { name: this.name, nickname: this.nickname, mail: this.mail, password: this.password, birthday: this.birthday, gender: this.gender, tipo: this.tipo };
    this.auth.register(user).subscribe((res) => {
      if (!res) return;
      store_data(res, 'user')
      this.navCtrl.setRoot(TabsPage)
    }, err => alert(err.json().message || 'Problema ao conectar com servidor.'))
  }

}
