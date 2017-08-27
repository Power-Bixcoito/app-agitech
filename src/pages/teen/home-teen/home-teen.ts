import { DetailsTaskPage } from './../../details-task/details-task';
import { SonsProvider } from './../../../providers/sons/sons';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { get_data } from '../../../utils/localStorage'

@IonicPage()
@Component({
  selector: 'page-home-teen',
  templateUrl: 'home-teen.html',
})
export class HomeTeenPage {
  user = get_data('user');
  tasks;
  activities;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private sons: SonsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTeenPage');
    this.sons.getTasks()
      .subscribe(response => {
        if (response != undefined) {
          this.tasks = response.filter(e => {
            if (!e.activityId)
              return e
          })
        } else {
          this.tasks = []
        }

        console.log('tasks', this.tasks)
      })
    this.sons.getActivities()
      .subscribe(response => {
        let activities = []
        response.forEach(activity => {
          if (activity.tasks.length) {
            let qtdTotal = 0;
            let qtdCompleted = 0;
            activity.tasks.forEach(task => {
              ++qtdTotal;
              if (task.completed)
                ++qtdCompleted
            });
            activity.qtdCompleted = qtdCompleted;
            activity.qtdTotal = qtdTotal;
            activities.push(activity)
          }
        });

        this.activities = activities;
      })
  }

  abrirTarefas(task) {
    this.navCtrl.push(DetailsTaskPage, task)
  }

  abrirActivities(activity) {
    console.log(activity);
    this.navCtrl.push('ActivityDetailPage', activity);
  }

}
