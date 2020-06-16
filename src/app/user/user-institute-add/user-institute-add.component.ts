import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserControlService } from 'src/app/services/user-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-institute-add',
  templateUrl: './user-institute-add.component.html',
  styleUrls: ['./user-institute-add.component.css']
})
export class UserInstituteAddComponent implements OnInit {
  form:FormGroup;
  instituteCreateMsg:string;
  createOk=false;
  createNotOk=false;

  constructor(public userControl:UserControlService,public router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      instituteName:new FormControl(null,{validators:[Validators.required]}),
      instituteEmail:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      no:new FormControl(null,{validators:[Validators.required]}),
      street:new FormControl(null,{validators:[Validators.required]}),
      city:new FormControl(null,{validators:[Validators.required]}),
      province:new FormControl(null,{validators:[Validators.required]}),
      instituteTelephone:new FormControl(null,{validators:[Validators.required,Validators.min(10)]})
    })
  }

  onAddInstitute(){
    let submitingData={instituteName:this.form.value.instituteName
      ,instituteEmail:this.form.value.instituteEmail
      ,no:this.form.value.no
      ,street:this.form.value.street
      ,city:this.form.value.city
      ,province:this.form.value.province,
      instituteTelephone:this.form.value.instituteTelephone
    }
    this.userControl.addInstitute(submitingData)
    .subscribe(data=>{
      console.log(data)
      this.instituteCreateMsg=data.message
      this.createOk=true
      this.router.navigate([''])
    },error=>{
      console.log(error)
      this.instituteCreateMsg=error.message
      this.createNotOk=true
    })

  }
}
