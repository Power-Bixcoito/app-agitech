import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../environment/environment";

/*
  Generated class for the ActivitiesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ActivitiesProvider {

  resourcePath;

  constructor(public http: Http) {
    this.resourcePath = environment.url + 'activities';
  }

  getTasks(id) {
    return this.http.get(`${this.resourcePath}/${id}/tasks`)
    .map(res => {
      return res.json()
    })
  }

}
