import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../environment/environment";

/*
  Generated class for the AgilitasProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AgilitasProvider {

  headers = new Headers();

  constructor(public http: Http) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('client_id', `${environment.agilitas.clientId}`);
    this.headers.append('access_token', `${environment.agilitas.accessToken}`);
  }

  getCardBalance (cardId) {
    
    return this.http.get(`${environment.agilitas.url}cartoes/${cardId}/saldo`, {
      headers: this.headers
    })
    .map(res => {
      return res.json()
    })
  }

  getCardStatus (cardId) {
    return this.http.get(`${environment.agilitas.url}cartoes/${cardId}/status`,{
      headers: this.headers
    })
    .map(res => {
      return res.json()
    })
  }

  alterCardStatus (cardId, status) {
    let enumStatus = ['bloqueado', 'ativo']
    let body = {
      status: enumStatus[status]
    }
    return this.http.put(`${environment.agilitas.url}cartoes/${cardId}/status`,body,{
      headers: this.headers
    })
    .map(res => {
      return res.json()
    })
  }

  getCardExtract (cardId,initialDate, finalDate) {
    return this.http.get(`${environment.agilitas.url}cartoes/${cardId}/extrato?dataInicial=${initialDate}&dataFinal=${finalDate}`,{
      headers: this.headers
    })
    .map(res => {
      return res.json()
    })
  }

}
