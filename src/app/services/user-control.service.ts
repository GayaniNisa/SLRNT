import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UserControlService {

  // BASE_URL="http://labnet.lk:8080"
  BASE_URL="http://localhost:8080"

  constructor(public http:HttpClient) { }

  updateUser(fullName:string,userName:string,mobileNo:string,email:string){
    let userUpdateRequest={fullName:fullName,userName:userName,mobileNo:mobileNo,email:email}
    return this.http.post<{message:string,success:boolean}>(this.BASE_URL+'/api/current/update-user',userUpdateRequest);
  }

  uploadUserImage(file:File){
    let uploadedImageData=new FormData()
    uploadedImageData.append('image',file)
    return this.http.post<{message:string,imgUrl:string}>(this.BASE_URL+'/api/current/update-user-image',uploadedImageData)
  }

  addInstitute(submitingData){
    return this.http.post<{message:string,success:boolean}>(this.BASE_URL+'/add/institute',submitingData)
  }
}
