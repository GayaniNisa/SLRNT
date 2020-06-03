import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  isLoggedIn:boolean=false;

  form:FormGroup
  token;
  isAuthorized;
  signInStatus:boolean=false;
  signInStatusMsg:string;

  form1:FormGroup;

  signUpStatus:boolean=false;
  signUpMsg:string;

  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit(): void {

    this.form=new FormGroup({
      userNameOrEmail:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required]})
    })

    this.form1 = new FormGroup({
      'fullName': new FormControl('',{validators:[Validators.required]}),
      'userName': new FormControl('',{validators:[Validators.required]}),
      'email': new FormControl('',{validators:[Validators.required,Validators.email]}),
      'password': new FormControl('',{validators:[Validators.required]})
    })

    this.authService.getCurrent()
    .subscribe(
      data=>{
        console.log(data)
        this.isLoggedIn=true
        console.log(this.isLoggedIn)

      },
      error=>{
        this.isLoggedIn=false
      }
    )



    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });


  }


  onLogout(){
    this.authService.logout()
    this.isLoggedIn=false
    this.router.navigate(['/'])
  }

  ngOnDestroy(){
    $('#exampleModalLong').modal('hide')
  }

  onLogin(){
  //   $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });

    if(this.form.invalid){
      return
    }
    this.authService.login(this.form.value.userNameOrEmail,this.form.value.password)
    .subscribe(data=>{
      this.form.reset()
      console.log(data)
      this.token=data.accessToken
      this.isAuthorized=true;
      this.authService.saveToken(this.token)

      this.signInStatus=true
      this.signInStatusMsg="sign in successful"

      console.log(data.user.roles[0].name)
      if(data.user.roles[0].name=="ROLE_USER" && data.user.roles.length==1){
        $('#exampleModalLong').modal('hide')
        this.router.navigateByUrl('researcher');
        // this.signin.ngOnDestroy()
        console.log("inside reseacher");
      }else if((data.user.roles[0].name=="ROLE_USER" || data.user.roles[0].name=="LEVEL0") && (data.user.roles[1].name=="ROLE_USER" || data.user.roles[1].name=="LEVEL0") && data.user.roles.length>1){
        $('#exampleModalLong').modal('hide')
        this.router.navigateByUrl('level0');
        console.log("inside level0");
      }else if((data.user.roles[0].name=="ROLE_USER" || data.user.roles[0].name=="LEVEL1") && (data.user.roles[1].name=="ROLE_USER" || data.user.roles[1].name=="LEVEL1") && data.user.roles.length>1){
        $('#exampleModalLong').modal('hide')
        this.router.navigateByUrl('level1');
        console.log("inside level1");
      }else if((data.user.roles[0].name=="ROLE_USER" || data.user.roles[0].name=="LEVEL2") && (data.user.roles[1].name=="ROLE_USER" || data.user.roles[1].name=="LEVEL2") && data.user.roles.length>1){
        $('#exampleModalLong').modal('hide')
        this.router.navigateByUrl('level2');
        console.log("inside level2");
      }
      // this.form.reset()

    },error=>{
      this.form.reset()
      this.signInStatus=false
      this.signInStatusMsg="sign in not successful"
    })
  }

  onSignup(){
    this.authService.signup(this.form.value.fullName,this.form.value.userName,this.form.value.email,this.form.value.password)
    .subscribe((data)=>{
      console.log(data)
      this.signUpStatus=true
      this.signUpMsg="signup successful"

    },error=>{

      this.signUpStatus=false
      this.signUpMsg="signup not successful"
    })
  }

}
