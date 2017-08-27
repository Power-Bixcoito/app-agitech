import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { NavParams } from 'ionic-angular'; 
import { TabsPage } from "../tabs/tabs";

declare var V;

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html'
})

export class TransactionPage {

  totalValue;
  point;
  constructor(public navCtrl: NavController, public navParams: NavParams) {     
    if(navParams.data === undefined){
      this.navCtrl.pop()
    }
  }

  ionViewDidLoad(){
    this.totalValue = this.navParams.data.totalValue
    this.point = this.navParams.data.point
    let subtotal = this.navParams.data.totalValue    
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
