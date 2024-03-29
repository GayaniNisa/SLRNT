import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserControlService } from 'src/app/services/user-control.service';
import { Router } from '@angular/router';
import { OrderControlService } from 'src/app/services/order-control.service';

declare var $: any;

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit,OnDestroy {

  instrumentList;

  userName:string;
  roles:string[]=[];
  createdAt:string;
  email:string;
  mobileNo:string;
  imageUrl:string;

  form:FormGroup;
  imagePreview:string;
  isUploaded:boolean=false;

  imageStatus:boolean=false;

  responseMsg:string;
  rsponseStatusOk:boolean=false;
  rsponseStatusNot:boolean=false;

  constructor(public authService:AuthService,public orderControl:OrderControlService,public userControl:UserControlService,public router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'image':new FormControl(null,{validators:[Validators.required]})
    })
    this.authService.getCurrent()
    .subscribe(data=>{
      console.log(data)
      this.userName=data.user.fullName;
      if(data.user.roles.length===1){
        console.log("lenght 1")
        this.roles.push(data.user.roles[0].name)
      }else if(data.user.roles.length===2){
        console.log("lenght 2")
        this.roles.push(data.user.roles[0].name)
        this.roles.push(data.user.roles[1].name)
      }
      // this.roles=data.user.roles
      console.log(data.user.roles.length)
      // console.log(this.)

      this.createdAt=data.user.createdAt.split("-")[0];
      this.email=data.user.email;
      this.mobileNo=data.user.mobileNo
      let imageUrlOriginal=data.user.image
      this.imageUrl="http://localhost:8080/"+data.user.image
      // this.imageUrl="http://labnet.lk:8080/"+data.user.image
      console.log(this.imageUrl)
      if(imageUrlOriginal==undefined){
        console.log("no image "+imageUrlOriginal)
        this.imageStatus=true
        console.log(this.imageStatus)
      }else{
        console.log("image available"+imageUrlOriginal)
        this.imageStatus=false
        console.log(this.imageStatus)
      }
    })

    this.orderControl.getUserAllOrders()
    .subscribe(data=>{
      console.log(data)
      this.instrumentList=data.orderList
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
    this.isUploaded=true
  }

  onUpload(){
    console.log(this.form.value.image)
    this.userControl.uploadUserImage(this.form.value.image)
    .subscribe(data=>{
      console.log(data)
      this.responseMsg=data.message;
      this.rsponseStatusOk=true
      console.log(this.responseMsg)

      this.ngOnInit()
    },error=>{
      this.rsponseStatusNot=true
      this.responseMsg=error.message
      console.log(this.responseMsg)
    })
  }


  ngOnDestroy(){
    // $('#exampleModalLong').modal('hide')  important
  }
}
