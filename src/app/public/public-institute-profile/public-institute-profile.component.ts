import { Component, OnInit } from '@angular/core';
import { PublicViewControlService } from 'src/app/services/public-view-control.service';
import { ActivatedRoute } from '@angular/router';
import { InstituteControlService } from 'src/app/services/institute-control.service';

@Component({
  selector: 'app-public-institute-profile',
  templateUrl: './public-institute-profile.component.html',
  styleUrls: ['./public-institute-profile.component.css']
})
export class PublicInstituteProfileComponent implements OnInit {


  instituteName:string;
  instituteEmail:string;
  jointedAt:string;
  rating:string;
  instrumentCount:number;

  no:string;
  street:string;
  city:string;
  province:string;

  telephoneNo:string


  imagePreview:string;
  isUploaded:boolean=false;

  imageStatus:boolean=false;
  imageUrl:string;

  responseOk:boolean=false;
  responseNot:boolean=false;
  responseMsg:string;

  constructor(public instituteControl:InstituteControlService,public publicControl:PublicViewControlService,public route:ActivatedRoute) { }

  ngOnInit(): void {


    let instituteId=this.route.snapshot.params['instituteId']
    this.publicControl.getPublicInstituteView(instituteId)
    .subscribe(data=>{
      console.log(data)
      this.instituteName=data.institute.instituteName;
      this.instituteEmail=data.institute.instituteEmail;
      this.jointedAt=data.institute.createdAt.split('-')[0];
      this.no=data.institute.no+","
      this.street=data.institute.street+","
      this.city=data.institute.city+","
      this.province=data.institute.province
      this.telephoneNo=data.institute.instituteTelephone;
      this.instrumentCount=data.institute.instrumentCount;
      this.imageUrl="http://localhost:8080/"+data.institute.image;
      // this.imageUrl="http://labnet.lk:8080/"+data.institute.image;
      let imageUrlOriginal=data.institute.image

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
  }



  }


