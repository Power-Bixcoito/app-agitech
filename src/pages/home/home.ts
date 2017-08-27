import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SonsProvider } from "../../providers/sons/sons";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  children;

  constructor(public navCtrl: NavController, public sons: SonsProvider) {

  }

  ionViewWillEnter() {
    this.sons.getSons()
    .subscribe(response => {
      this.children = response
    })
  }

}
