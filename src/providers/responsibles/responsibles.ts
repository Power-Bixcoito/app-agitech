import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../environment/environment";

/*
  Generated class for the ResponsiblesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ResponsiblesProvider {

  resourcePath;
  
  constructor(public http: Http) {
    this.resourcePath = environment.url + 'responsibles';
  }

  getTask(id){
    return this.http.get(`${this.resourcePath}/${id}/tasks`)
    .map(res => {
      return res.json()
    })
  }

  getActivity(id){
    return this.http.get(`${this.resourcePath}/${id}/activities`)
    .map(res => {
      return res.json()
    })
  }

}
