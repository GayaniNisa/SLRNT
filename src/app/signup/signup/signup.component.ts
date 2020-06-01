import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup;

  signUpStatus:boolean=false;
  signUpMsg:string;

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'fullName': new FormControl('',{validators:[Validators.required]}),
      'userName': new FormControl('',{validators:[Validators.required]}),
      'email': new FormControl('',{validators:[Validators.required,Validators.email]}),
      'password': new FormControl('',{validators:[Validators.required]})
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
