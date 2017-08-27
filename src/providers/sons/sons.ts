import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environment/environment'
import { get_data } from '../../utils/localStorage'
import 'rxjs/add/operator/map';

/*
  Generated class for the SonsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SonsProvider {

  resourcePath;

  constructor(public http: Http) {
    this.resourcePath = environment.url + 'teens';
  }

  getSons(id) {
    return this.http.get(this.resourcePath)
      .map(res => {
        return res.json()
      })
  }

  getTasks() {
    return this.http.get(`${this.resourcePath}/${get_data('user').id}/tasks`)
      .map(res => {
        return res.json()
      })
  }

  getActivities() {
    return this.http.get(`${this.resourcePath}/${get_data('user').id}/activities`)
      .map(res => {
        return res.json()
      })
  }

  addSons() {

  }

}
