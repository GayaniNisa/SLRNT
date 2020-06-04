import { Component, OnInit } from '@angular/core';
import { InstituteControlService } from 'src/app/services/institute-control.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-institute-details',
  templateUrl: './institute-details.component.html',
  styleUrls: ['./institute-details.component.css']
})
export class InstituteDetailsComponent implements OnInit {
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

  form:FormGroup;
  imagePreview:string;
  isUploaded:boolean=false;

  imageStatus:boolean=false;
  imageUrl:string;

  constructor(public instituteControl:InstituteControlService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'image':new FormControl(null,{validators:[Validators.required]})
    })

    this.instituteControl.getInstitue()
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
    this.isUploaded=true;

  }

  onUpload(){
    console.log('uploaded')
    console.log(this.form.value.image)
    this.instituteControl.addProfilePic(this.form.value.image)
    .subscribe(data=>{
      console.log(data)
      this.ngOnInit()
    })
  }
}
