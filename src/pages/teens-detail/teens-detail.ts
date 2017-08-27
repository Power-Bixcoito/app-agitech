import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SonsProvider } from "../../providers/sons/sons";
import { AgilitasProvider } from "../../providers/agilitas/agilitas";

/**
 * Generated class for the TeensDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teens-detail',
  templateUrl: 'teens-detail.html',
})
export class TeensDetailPage {
  recompensa = 0;
  teen;
  saldo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public teenProvider: SonsProvider, public agiProvider: AgilitasProvider) {
  }

  ionViewDidLoad() {
    this.teenProvider.getTeen(this.navParams.data.id)
      .subscribe(res => {
        this.teen = res;
        this.agiProvider.getCardBalance(this.teen.card.proxy)
          .subscribe(res => {
            this.saldo = res.saldo.valor
          })
      })
  }

  operationsCard(card) {
    console.log(card);
    this.navCtrl.push('CardsDetailPage', card)
  }





}
