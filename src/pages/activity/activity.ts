import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResponsiblesProvider } from "../../providers/responsibles/responsibles";
import { ActivitiesProvider } from "../../providers/activities/activities";

/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {

  tasks;
  activities;

  constructor(public navCtrl: NavController, public navParams: NavParams, public responsibles: ResponsiblesProvider, public activitiesProvider: ActivitiesProvider) {}

  ionViewWillEnter() {
    this.responsibles.getTask(1)
    .subscribe(response => {
      this.tasks = response.filter(e => {
        return e.activityId !== null
      })
    })

    this.responsibles.getActivity(1)
    .subscribe(response => {
      this.activities = response;
    })
  }

}
