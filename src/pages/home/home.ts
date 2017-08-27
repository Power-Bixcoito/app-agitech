import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { get_data } from '../../utils/localStorage'
import { ResponsiblesProvider } from "../../providers/responsibles/responsibles";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  children;

  constructor(public navCtrl: NavController, public responsibleProvider: ResponsiblesProvider) {

  }

  ionViewWillEnter() {
    let user = get_data('user')
    this.responsibleProvider.getTeens(user.id)
    .subscribe(response => {
      this.children = response.teens
    })
  }

}
