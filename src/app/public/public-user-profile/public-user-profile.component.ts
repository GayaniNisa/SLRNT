import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { OrderControlService } from 'src/app/services/order-control.service';
import { UserControlService } from 'src/app/services/user-control.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicViewControlService } from 'src/app/services/public-view-control.service';

@Component({
  selector: 'app-public-user-profile',
  templateUrl: './public-user-profile.component.html',
  styleUrls: ['./public-user-profile.component.css']
})
export class PublicUserProfileComponent implements OnInit {

  instrumentList;

  userName:string;
  roles:string[]=[];
  createdAt:string;
  email:string;
  mobileNo:string;
  imageUrl:string;

  imagePreview:string;
  isUploaded:boolean=false;

  imageStatus:boolean=false;

  responseMsg:string;
  rsponseStatusOk:boolean=false;
  rsponseStatusNot:boolean=false;

  constructor(public route:ActivatedRoute,public publicControl:PublicViewControlService,public authService:AuthService,public orderControl:OrderControlService,public userControl:UserControlService,public router:Router) { }

  ngOnInit(): void {
    let userId=this.route.snapshot.params['userId']
    // this.authService.getCurrent()
    // .subscribe(data=>{
    //   console.log(data)
    //   this.userName=data.user.fullName;
    //   if(data.user.roles.length===1){
    //     console.log("lenght 1")
    //     this.roles.push(data.user.roles[0].name)
    //   }else if(data.user.roles.length===2){
    //     console.log("lenght 2")
    //     this.roles.push(data.user.roles[0].name)
    //     this.roles.push(data.user.roles[1].name)
    //   }
    //   // this.roles=data.user.roles
    //   console.log(data.user.roles.length)
    //   // console.log(this.)

    //   this.createdAt=data.user.createdAt.split("-")[0];
    //   this.email=data.user.email;
    //   this.mobileNo=data.user.mobileNo
    //   let imageUrlOriginal=data.user.image
    //   this.imageUrl="http://localhost:8080/"+data.user.image
    //   // this.imageUrl="http://labnet.lk:8080/"+data.user.image
    //   console.log(this.imageUrl)
    //   if(imageUrlOriginal==undefined){
    //     console.log("no image "+imageUrlOriginal)
    //     this.imageStatus=true
    //     console.log(this.imageStatus)
    //   }else{
    //     console.log("image available"+imageUrlOriginal)
    //     this.imageStatus=false
    //     console.log(this.imageStatus)
    //   }
    // })

    this.publicControl.getPublicUserView(userId)
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
      this.instrumentList=data.user.orders;
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

    // this.orderControl.getUserAllOrders()
    // .subscribe(data=>{
    //   console.log(data)
    //   this.instrumentList=data.orderList
    // })
  }



  ngOnDestroy(){
    // $('#exampleModalLong').modal('hide')  important
  }

}
