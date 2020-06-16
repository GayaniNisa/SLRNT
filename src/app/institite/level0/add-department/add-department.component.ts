import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DeparmentControlService } from 'src/app/services/deparment-control.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  form:FormGroup;

  responseOk:boolean=false;
  responseNot:boolean=false;
  responseMsg:string;


  constructor(public departmentControl:DeparmentControlService) {

  }

  ngOnInit() {
    this.form=new FormGroup({
      departmentName:new FormControl(null,{validators:[Validators.required]}),
      departmentHeadEmail:new FormControl(null,{validators:[Validators.required,Validators.email]})
    })
  }

  onAddDepartment(){
    this.departmentControl.addDepartment(this.form.value.departmentName,this.form.value.departmentHeadEmail)
    .subscribe(data=>{
      this.responseOk=true;
      this.responseMsg=data.message
      console.log(data)
    },error=>{
      this.responseNot=true
      this.responseMsg=error.message
    })
  }

}
