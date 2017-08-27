import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgilitasProvider } from "../../providers/agilitas/agilitas";

/**
 * Generated class for the CardsDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards-detail',
  templateUrl: 'cards-detail.html',
})
export class CardsDetailPage {

  card;
  status = false;
  initialDate;
  finalDate;
  extract = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public agiProvider: AgilitasProvider) {
    this.card = navParams.data
    this.getCardStatus(this.card.proxy)
  }

  getCardStatus (proxy) {
    this.agiProvider.getCardStatus(proxy)
    .subscribe(res => {
      switch (res.status) {
        case 'Ativo':
          this.status = true;
          break;
        case 'Bloqueado':
          this.status = false;
          break;
        default:
          this.status = false;
      }
    })
  }

  updateCardStatus (e) {
    let status;
    switch (this.status) {
      case true:
        status = 1;
        break;
      case false:
        status = 0;
        break;
      default:
        status = 1;
    }

    this.agiProvider.alterCardStatus(this.card.proxy,status)
  }

  getExtract (e) {
    if(this.initialDate != undefined && this.finalDate != undefined) {
      this.agiProvider.getCardExtract(this.card.proxy,this.initialDate, this.finalDate)
      .subscribe(res => {
        this.extract = res.extrato
      })      
    }    
  }

}
