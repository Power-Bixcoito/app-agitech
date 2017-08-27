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
    this.getTasks();
    this.getActivities();
  }

  getTasks() {
    this.sons.getTasks().subscribe(tasks => this.tasks = tasks)
  }

  getActivities() {
    this.sons.getActivities().subscribe(activities => this.activities = activities)
  }

}
