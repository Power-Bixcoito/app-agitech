import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular'; 

declare var V;

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html'
})

export class TransactionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad(){
    // let subtotal = this.navParams.get('valorTotal')
    let subtotal = this.navParams.get('payment.totalValue')
    this.onVisaCheckoutReady(subtotal)
  }

  onVisaCheckoutReady(subtotal) {
    V.init({
      apikey: "50W9NP1W1UJG9JP4755G21I7e1wnzzwnePqMWIU3G5LJ3Ceus",
      paymentRequest: {
        currencyCode: "BRL",
        subtotal: subtotal
      }
    });
    V.on("payment.success", function (payment) {
      console.log('success', JSON.stringify(payment));
    });
    V.on("payment.cancel", function (payment) {
      console.log('cancel', JSON.stringify(payment));
    });
    V.on("payment.error", function (payment, error) {
      console.log('error', JSON.stringify(error));
    });
  }

}
