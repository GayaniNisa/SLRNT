import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institute, User } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicViewControlService {

  BASE_URL='http://localhost:8080'
  // BASE_URL='http://labnet.lk:8080'

  constructor(public http:HttpClient) { }

  getPublicInstituteView(instituteId:string){
    return this.http.get<{institute:Institute,message:string,success:boolean}>(this.BASE_URL+'/get/no-auth-institute/'+instituteId)
  }

  getPublicUserView(userId:string){
    return this.http.get<{user:User,message:string,success:boolean}>(this.BASE_URL+'/api/custodian-request/user/'+userId)
  }
}
