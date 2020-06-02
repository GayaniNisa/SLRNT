import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserControlService } from 'src/app/services/user-control.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  form:FormGroup;

  fullName:string;
  userName:string;
  mobileNo:string;
  email:string;
  password:string;

  image;

  constructor(private authService:AuthService,private userControl:UserControlService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      fullName: new FormControl(null),
      userName: new FormControl(null),
      mobileNo: new FormControl(null),
      email: new FormControl(null)
      // password: new FormControl(null),
    })

    this.authService.getCurrent()
    .subscribe(data=>{
      console.log("current")
      console.log(data.user.userName)
      this.fullName=data.user.fullName;
      this.image=data.user.image;
      console.log(this.fullName)
      console.log(this.fullName)
      this.userName=data.user.userName;
      this.mobileNo=data.user.mobileNo;
      this.email=data.user.email;
      this.password=data.user.password;
    });
  }

  onUpdateDetails(){
    console.log(this.form.value.userName+" "+this.form.value.mobileNo)
    this.userControl.updateUser(this.form.value.fullName,this.form.value.userName,this.form.value.mobileNo,this.form.value.email)
    .subscribe(data=>{
      console.log(data)
    })
  }
}
