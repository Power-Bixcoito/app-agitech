import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsTaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details-task',
  templateUrl: 'details-task.html',
})
export class DetailsTaskPage {

  task

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.data) {
      this.task = navParams.data;
    } else {
      this.navCtrl.pop()
    }
  }

  ionViewDidLoad () {
    console.log(this.task);
    
  }

}
