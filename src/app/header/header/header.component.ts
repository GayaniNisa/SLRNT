import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

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


  form1:FormGroup;


  signInBtn:string;

  navigateUrl:string;

  constructor(public authService:AuthService,public router:Router,private _snackBar: MatSnackBar,private _snackBar2: MatSnackBar) { }

  ngOnInit(): void {

    this.form=new FormGroup({
      userNameOrEmail:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password:new FormControl(null,{validators:[Validators.required]})
    })

    // if(!this.authService.isLoggedIn()){
    this.authService.getCurrent()
    .subscribe(
      data=>{
        let email=data.user.email[0]
        this.signInBtn=email.toUpperCase()
        console.log("sign in capital"+this.signInBtn)
        console.log(data)
        this.isLoggedIn=true
        console.log(this.isLoggedIn)
      },
      error=>{
        this.isLoggedIn=false
      }
    )
    // }

    this.navigateUrl=localStorage.getItem('role')




    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });

  }
  formInitalize(){
    this.form=new FormGroup({
      userNameOrEmail:new FormControl('',{validators:[Validators.required,Validators.email]}),
      password:new FormControl('',{validators:[Validators.required]})
    })
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
      let email=data.user.email[0]
      this.signInBtn=email.toUpperCase()
      console.log("sign in capital"+this.signInBtn)
      console.log(data)
      this.token=data.accessToken
      this.isAuthorized=true;
      this.authService.saveToken(this.token)


      $('.modal1').modal('toggle');

      this._snackBar.open('SIGN IN SUCCESSFULL', '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      console.log(data.user.roles[0].name)
      if(data.user.roles[0].name=="ROLE_USER" && data.user.roles.length==1){
        $('#exampleModalLong').modal('hide')
        this.navigateUrl='researcher'
        this.authService.saveRole('researcher')
        this.router.navigateByUrl('researcher');
        // this.signin.ngOnDestroy()


        console.log("inside reseacher");
      }else if((data.user.roles[0].name=="ROLE_USER" || data.user.roles[0].name=="LEVEL0") && (data.user.roles[1].name=="ROLE_USER" || data.user.roles[1].name=="LEVEL0") && data.user.roles.length>1){
        $('#exampleModalLong').modal('hide')
        this.navigateUrl='level0'
        this.authService.saveRole('level0')
        this.router.navigateByUrl('level0');


        console.log("inside level0");
      }else if((data.user.roles[0].name=="ROLE_USER" || data.user.roles[0].name=="LEVEL1") && (data.user.roles[1].name=="ROLE_USER" || data.user.roles[1].name=="LEVEL1") && data.user.roles.length>1){
        $('#exampleModalLong').modal('hide')
        this.navigateUrl='level1'
        this.authService.saveRole('level1')
        this.router.navigateByUrl('level1');
        console.log("inside level1");
      }else if((data.user.roles[0].name=="ROLE_USER" || data.user.roles[0].name=="LEVEL2") && (data.user.roles[1].name=="ROLE_USER" || data.user.roles[1].name=="LEVEL2") && data.user.roles.length>1){
        $('#exampleModalLong').modal('hide')
        this.navigateUrl='level2'
        this.authService.saveRole('level2')
        this.router.navigateByUrl('level2');
        console.log("inside level2");
      }
      // this.form.reset()
      // this.form.clearValidators()

      $('#exampleModalLong').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
    });

      // $('.signInOk').hide()

    },error=>{
      // this.form.reset()

      console.log(error.message)


      let config = new MatSnackBarConfig();
      config.panelClass = ['custom-class'];

      $('.modal1').modal('toggle');


      this._snackBar2.open(error.message, '', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass:['custom-class']
      });

      $('#exampleModalLong').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
    });
    })
  }

  // onSignup(){
  //   this.authService.signup(this.form.value.fullName,this.form.value.email,this.form.value.password)
  //   .subscribe((data)=>{
  //     console.log(data)
  //     $('.modal2').modal('toggle');

  //     $('#exampleModal').on('hidden.bs.modal', function(){
  //       $(this).find('form')[0].reset();
  //   });

  //   },error=>{

  //     $('.modal2').modal('toggle');

  //     $('#exampleModal').on('hidden.bs.modal', function(){
  //       $(this).find('form')[0].reset();
  //   });
  //   })
  // }

  navigateToProfile(){
    console.log(this.navigateUrl)
    this.router.navigate([this.navigateUrl])
  }
}
