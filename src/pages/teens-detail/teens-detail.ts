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

  teen;
  saldo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public teenProvider: SonsProvider,public agiProvider: AgilitasProvider) {
  }

  ionViewWillEnter () {
    this.teenProvider.getTeen(this.navParams.data.id)
    .subscribe(res => {
      this.teen = res;
      console.log(this.teen)
      this.agiProvider.getCardBalance(this.teen.card.proxy)
      .subscribe(res => {
        this.saldo = res.saldo.valor        
      })
    })    
  }

  operationsCard (card) {
    console.log(card);
    this.navCtrl.push('CardsDetailPage',card)
  }

  convertPoints(card, points) {
    card = this.teen.card
    points = this.teen.points
    var totalValue = points * 5.0
    var payment = {
      card: card,
      totalValue: totalValue
    } 
    payment.card = card
    payment.totalValue = totalValue
    this.agiProvider.addValueToCard(card.proxy, totalValue)
    this.navCtrl.push('TransactionPage', card)
  }
  



}
