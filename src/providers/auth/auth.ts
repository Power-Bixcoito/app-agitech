import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../environment/environment";
import { get_data } from '../../utils/localStorage'

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {
  resourcePath;

  constructor(public http: Http) {
    this.resourcePath = environment.url + 'login';
  }

  login(user){
    return this.http.post(this.resourcePath, user)
    .map(res => res.json())
  }

}
