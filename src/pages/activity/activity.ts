import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ResponsiblesProvider } from "../../providers/responsibles/responsibles";
import { ActivitiesProvider } from "../../providers/activities/activities";
import { get_data } from '../../utils/localStorage'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public responsibles: ResponsiblesProvider, public activitiesProvider: ActivitiesProvider, public alertCtrl: AlertController) {}

  ionViewWillEnter() {
    this.responsibles.getTask(1)
    .subscribe(response => {
      if(response != undefined) {
        this.tasks = response.filter(e => {
          return e.activityId !== null
        })
      } else {
        this.tasks = []
      }
    })
    let user = get_data('user')
    this.responsibles.getActivity(user.id)
    .subscribe(response => {
      this.activities = response;
    })
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: '',
      message: "Você deseja adicionar tarefa ou uma atividade(conjunto de tarefas)?",
      buttons: [
        {
          text: 'Tarefa',
          handler: data => {

          }
        },
        {
          text: 'Atividade',
          handler: data => {

          }
        }
      ]
    });
    prompt.present();
  }

}
