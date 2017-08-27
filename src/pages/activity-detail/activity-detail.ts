import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { ActivitiesProvider } from "../../providers/activities/activities";

/**
 * Generated class for the ActivityDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity-detail',
  templateUrl: 'activity-detail.html',
})
export class ActivityDetailPage {

  activity
  tasks
  constructor(public navCtrl: NavController, public navParams: NavParams, public activitiesProv: ActivitiesProvider) {
    if(navParams.data) {
      this.activity = navParams.data;
    }
    else {
      this.navCtrl.setRoot(TabsPage)
    }
  }

  ionViewDidLoad() {
    this.activitiesProv.getFullActivity(this.activity.id).subscribe(res => {
      this.tasks = res.tasks;
      console.log('tasks', this.tasks);
    })
    console.log('ionViewDidLoad ActivityDetailPage');
  }

}
