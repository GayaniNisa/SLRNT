import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instrument } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InstrumentControlService {
  BASE_URL='http://localhost:8080'
  // BASE_URL='http://labnet.lk:8080';

  constructor(public http:HttpClient) { }


  addInstrument(instrumentFormData){
    return this.http.post<Instrument>(this.BASE_URL+'/add/instrument',instrumentFormData);
  }
}
