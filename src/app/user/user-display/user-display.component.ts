import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserControlService } from 'src/app/services/user-control.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  userName:string;
  roles:string[]=[];
  createdAt:string;
  email:string;
  mobileNo:string;
  imageUrl:string;

  form:FormGroup;
  imagePreview:string;

  imageStatus:boolean=false;

  constructor(public authService:AuthService,public userControl:UserControlService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'image':new FormControl(null,{validators:[Validators.required]})
    })
    this.authService.getCurrent()
    .subscribe(data=>{
      console.log(data)
      this.userName=data.user.fullName;
      this.roles.push(data.user.roles[0].name)
      this.roles.push(data.user.roles[1].name)
      this.createdAt=data.user.createdAt.split("-")[0];
      this.email=data.user.email;
      this.mobileNo=data.user.mobileNo
      this.imageUrl="http://localhost:8080/"+data.user.image
      console.log(this.imageUrl)
      if(this.imageUrl=="null"){
        console.log("no image")
        this.imageStatus=true
        console.log(this.imageStatus)
      }else{
        console.log("image available")
        this.imageStatus=false
        console.log(this.imageStatus)
      }
    })
  }

  onImagePicked(event:Event){
    console.log(event)
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    this.form.patchValue({image:file})
    this.form.get('image').updateValueAndValidity();
    console.log(this.form)
    const reader = new FileReader()
    reader.onload= ()=>{
      this.imagePreview=<string>(reader.result);
      let x= <string>(reader.result)
      console.log(this.imagePreview)
    };
    reader.readAsDataURL(file)
    console.log(this.imagePreview)
  }

  onUpload(){
    console.log(this.form.value.image)
    this.userControl.uploadUserImage(this.form.value.image)
    .subscribe(data=>{
      console.log(data)
    })
  }


}
