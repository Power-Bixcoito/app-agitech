import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SonsProvider } from "../../providers/sons/sons";
import { ResponsiblesProvider } from "../../providers/responsibles/responsibles";
import { get_data } from "../../utils/localStorage";
import { TasksProvider } from "../../providers/tasks/tasks";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the RegistertaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registertask',
  templateUrl: 'registertask.html',
  providers: [TasksProvider]
})
export class RegisterTaskPage {
  activity

  user
  titulo
  descricao
  dateInicio
  dateFinal
  recomp
  teenId
  teens
  final: boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceResp: ResponsiblesProvider, public taskServ: TasksProvider) {
    console.log("navParams", navParams.data)
    if (navParams.data) {
      this.activity = navParams.data;
    }
    
    //else this.activity = null
    console.log('idTask', this.activity)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistertaskPage');
  }
  ionViewWillEnter() {
    this.user = get_data('user');
    this.getTeens();
  }

  getTeens() {
    //console.log('getTeens', this.user.id)
    this.serviceResp.getTeens(this.user.id).subscribe(res => {
      this.teens = res;
      //console.log('res', res);
      
    })
  }



  registerTask() {
    let task
    if(!this.activity) {
      task = {
        title: this.titulo,
        description: this. descricao,
        completed: false,
        startedAt: this.dateInicio,
        endedAt: this.dateFinal,
        reward: this.recomp,
        responsibleId:  this.user.id,
        teenId: this.teenId
      };
    }
    else {
      task = {
        title: this.titulo,
        description: this. descricao,
        completed: false,
        startedAt: this.dateInicio,
        endedAt: this.dateFinal,
        reward: this.recomp,
        responsibleId:  this.user.id,
        teenId: this.activity.teenId,
        activityId: this.activity.id
      }
    }
      this.taskServ.createTasks(task).subscribe(res => {
        //console.log('response createTasks', res);
        if(this.activity.id && !this.final) {
          this.navCtrl.push('RegisterTaskPage', this.activity)
        }
        else if(this.activity.id && this.final) {
          this.navCtrl.push(TabsPage)
        }
        else {
          this.navCtrl.push(TabsPage)
        }
      })

    console.log('task', task)
    
  }

}
