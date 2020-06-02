import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeparmentControlService {

  BASE_URL='http://localhost:8080'
  // BASE_URL='http://labnet.lk:8080'

  constructor(public http:HttpClient) { }

  addDepartment(departmentName:string,departmentHeadEmail:string){
    let departmentAddRequest={departmentName:departmentName,departmentHeadEmail:departmentHeadEmail}
    return this.http.post(this.BASE_URL+'/add/department',departmentAddRequest);
  }
}
