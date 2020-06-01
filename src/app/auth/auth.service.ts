import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

interface SignUpRequest{
  fullName:string,
  userName:string,
  email:string,
  password:string
}

interface User{
  email:string;
  fullName:string;
  image:string;
  mobileNo:string;
  password:string;
  userName:string;
  institute:Institute;
  department:Department;
  instruments:Instrument;
  roles:Roles[]
}
interface Roles{
    name:string,
    _id:string
}

interface Institute{
  instituteHead:User,
  instituteName:string,
  instituteEmail:string,
  no:string,
  street:string,
  city:string,
  province:string,
  instituteTelephone:string,
  rating:string,
  departments:Department[]
}

interface Department{
  instituteId:Institute,
  departmentHead:User,
  departmentName:string,
  departmentHeadEmail:string,
  no:string,
  street:string,
  city:string,
  province:string,
  departmentTelephone:string,
  rating:string,
  instruments:Instrument[]
}

interface Instrument{
  custodianId:User,
  instituteId:Institute,
  departmentId:Department,
  applicationList:[],
  brand:string,
  custodianEmail:string,
  categoriesSet:string,
  depricatedDate:string,
  description:string,
  images:[],
  instrumentName:string,
  limitationsList:[],
  manufacturedDate:string,
  modal:string,
  price:string,
  rating:string,
  state:string,
  strengthsList:[]
}

interface Roles{}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:string;
  currentUser;
  isAuthorized:boolean=false;
  user_roles;

  BASE_URL='http://localhost:8080'


  constructor(public http:HttpClient,private router:Router) { }

  login(email:string,password:string){
    let postData = {userNameOrEmail:email,password:password}
    console.log(postData)
    return this.http.post<{accessToken:string,tokenType:string,user:User}>('http://localhost:8080/api/auth/signin',postData);

  }
  signup(fullName:string,userName:string,email:string,password:string){
    console.log("sending")

    let signUpData={fullName:fullName,userName:userName,email:email,password:password}
    return this.http.post<{message:string,success:Boolean,userId:string}>(this.BASE_URL+'/api/auth/signup',signUpData);
  }

  getCurrent(){
    console.log(this.currentUser)
    return this.http.get<User>(this.BASE_URL+'/api/current/user');

  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    if(this.getToken()){
      return true
    }
    return false
  }

  saveToken(token:string){
    localStorage.setItem('token',token)
  }

  logout(){
    localStorage.removeItem('token')
  }
}