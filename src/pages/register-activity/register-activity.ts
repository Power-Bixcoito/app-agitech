import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterTaskPage } from "../registertask/registertask";
import { get_data } from "../../utils/localStorage";
import { ResponsiblesProvider } from "../../providers/responsibles/responsibles";
import { ActivitiesProvider } from "../../providers/activities/activities";

/**
 * Generated class for the RegisterActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-activity',
  templateUrl: 'register-activity.html',
})
export class RegisterActivityPage {

  idTask

  registerTask = RegisterTaskPage

  user
  titulo
  descricao
  dateInicio
  dateFinal
  recomp
  teenId
  teens

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceResp: ResponsiblesProvider, public activityServ: ActivitiesProvider) {
  }


  ionViewWillEnter() {
    this.user = get_data('user');
    this.getTeens();
  }

  getTeens() {
    this.serviceResp.getTeens(this.user.id).subscribe(res => {
      this.teens = res;

    })
  }


  registerActivity() {

   // console.log('teenId', this.teenId)
    let task = {
      title: this.titulo,
      description: this.descricao,
      completed: false,
      startedAt: this.dateInicio,
      endedAt: this.dateFinal,
      responsibleId: this.user.id,
      teenId: this.teenId
    };
    this.activityServ.createTasks(task).subscribe(res => {
      console.log('response createTasks', res);
      this.navCtrl.push(this.registerTask, res)
    })

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterActivityPage');
  }

}
