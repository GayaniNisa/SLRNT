import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institute } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InstituteControlService {

  // BASE_URL='http://labnet.lk:8080';
  BASE_URL='http://localhost:8080';

  constructor(public http:HttpClient) { }

  getInstitue(){
    return this.http.get<{success:Boolean,institute:Institute}>(this.BASE_URL+'/get/institute')
  }
}
