import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { HeaderComponent } from 'src/app/header/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form:FormGroup;

  token;
  isAuthorized;

  signInStatus:boolean=false;
  signInStatusMsg:string;

  @ViewChild('hide1') signin:HeaderComponent


  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      userNameOrEmail:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required]})
    })
  }

  onLogin(){
    if(this.form.invalid){
      return
    }
    this.authService.login(this.form.value.userNameOrEmail,this.form.value.password)
    .subscribe(data=>{
      console.log(data)
      this.token=data.accessToken
      this.isAuthorized=true;
      this.authService.saveToken(this.token)

      this.signInStatus=true
      this.signInStatusMsg="sign in successful"

      console.log(data.user.roles[0].name)
      if(data.user.roles[0].name=="ROLE_USER" && data.user.roles.length==1){
        this.router.navigateByUrl('researcher');
        // this.signin.ngOnDestroy()
        console.log("inside reseacher");
      }else if((data.user.roles[0].name=="ROLE_USER" || data.user.roles[0].name=="LEVEL0") && (data.user.roles[1].name=="ROLE_USER" || data.user.roles[1].name=="LEVEL0") && data.user.roles.length>1){
        this.router.navigateByUrl('level0');
        console.log("inside level0");
      }else if((data.user.roles[0].name=="ROLE_USER" || data.user.roles[0].name=="LEVEL1") && (data.user.roles[1].name=="ROLE_USER" || data.user.roles[1].name=="LEVEL1") && data.user.roles.length>1){
        this.router.navigateByUrl('level1');
        console.log("inside level1");
      }else if(data.user.roles[0].name=="ROLE_USER" && data.user.roles[1].name=="ROLE_ADMIN_LEVEL_2" && data.user.roles.length>1){
        this.router.navigateByUrl('level2');
        console.log("inside level2");
      }

      this.form.reset()

    },error=>{
      this.signInStatus=false
      this.signInStatusMsg="sign in not successful"
      this.form.reset()
    })

  }
}
