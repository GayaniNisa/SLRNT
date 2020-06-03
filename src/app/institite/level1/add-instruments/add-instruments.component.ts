import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstrumentControlService } from 'src/app/services/instrument-control.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-instruments',
  templateUrl: './add-instruments.component.html',
  styleUrls: ['./add-instruments.component.css']
})
export class AddInstrumentsComponent implements OnInit {

  servers = [];
  instrumentName;
  manufacturedDate;
  depriciatedDate;
  brand;
  model;
  price;
  description;
  specificationTechs = [];
  specTech;
  strengths = [];
  limitation;
  limitations = [];
  application;
  applications = [];
  strength;
  custodianEmail;

  specificationCount = 0;
  strengthCount = 0;
  limitationCount = 0;
  applicationCount = 0;


  specification;
  SpecificationArraySize: number = 0;

  institute;
  instituteId;
  selectedFile1;
  selectedFile2;
  selectedFile3;
  selectedFile4;
  selectedFile5;

  instrumentInfo;
  department;
  departmentId;

  success: boolean = false;
  Nsuccess: boolean = false;

  check;

  minDate: Date;
  maxDate: Date;




//   x() {
//     let start=new Date();
//     let end=new Date('2021-02-09');
//     for(var arr=[],dt=start; dt<=end; dt.setDate(dt.getDate()+1)){
//         this.disabledDates.push(new Date(dt));
//     }

// };

  constructor(private http: HttpClient, private instrumentControll: InstrumentControlService) {
    this.maxDate = new Date();

    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit() {
  }

  submit() {

    console.log(" " + this.instrumentName + " " + this.model + " " + this.brand + " " + this.manufacturedDate + " " + this.depriciatedDate + " " + this.price + " " + this.custodianEmail + " " + this.description);

    const instrument =new FormData()

    instrument.append("image",null)
    instrument.append("instrumentName",this.instrumentName)
    instrument.append("modal",this.model)
    instrument.append("brand",this.brand)
    instrument.append("strengthsList",JSON.stringify(this.strengths))
    instrument.append("limitationsList",JSON.stringify(this.limitations))
    instrument.append("applicationList",JSON.stringify(this.applications))
    instrument.append("technicalSpecificationList",JSON.stringify(this.specificationTechs))
    instrument.append("categoriesSet",JSON.stringify(null))
    instrument.append("manufacturedDate",this.manufacturedDate)
    instrument.append("depricatedDate",this.depriciatedDate)
    instrument.append("state",null)
    instrument.append("price",this.price)
    instrument.append("description",this.description)
    instrument.append("rating",null)
    instrument.append("custodianEmail",this.custodianEmail)
    instrument.append("imageArr",this.selectedFile1)
    instrument.append("imageArr",this.selectedFile2)
    instrument.append("imageArr",this.selectedFile3)
    instrument.append("imageArr",this.selectedFile4)
    instrument.append("imageArr",this.selectedFile5)



    this.instrumentControll.addInstrument(instrument).subscribe(
      data => {
        this.success = true;
        console.log(data);
        this.check = data.description;
      },
      error => {
        this.Nsuccess = false;
        console.log(error);
      }
    );


  }

  pushSpecification() {
    this.specificationTechs.push(this.specTech);
    this.specificationCount = this.specificationTechs.length;
    this.specTech = " ";
  }

  clearSpecifications() {
    this.specificationTechs.length = 0;
    this.specificationCount = this.specificationTechs.length;
  }

  pushStrengths() {
    this.strengths.push(this.strength);
    this.strengthCount = this.strengths.length;
    this.strength = " ";
  }

  clearStrengths() {
    this.strengths.length = 0;
    this.strengthCount = this.strengths.length;
  }

  pushLimitations() {
    this.limitations.push(this.limitation);
    this.limitationCount = this.limitations.length;
    this.limitation = " ";
  }

  clearLimitations() {
    this.limitations.length = 0;
    this.limitationCount = this.limitations.length;
  }

  pushApplications() {
    this.applications.push(this.application);
    this.applicationCount = this.applications.length;
    this.application = " ";
  }

  clearApplications() {
    this.applications.length = 0;
    this.applicationCount = this.applications.length;
  }


  onFileChanged(event) {
    const file = event.target.files[0];
    console.log(file);
    // console.log(file);
  }

  onFileSelected1(event) {
    // console.log(event);
    this.selectedFile1 = <File>event.target.files[0];
    console.log(this.selectedFile1);
  }
  onFileSelected2(event) {
    // console.log(event);
    this.selectedFile2 = <File>event.target.files[0];
    console.log(this.selectedFile2);
  }
  onFileSelected3(event) {
    // console.log(event);
    this.selectedFile3 = <File>event.target.files[0];
    console.log(this.selectedFile2);
  }
  onFileSelected4(event) {
    // console.log(event);
    this.selectedFile4 = <File>event.target.files[0];
    console.log(this.selectedFile4);
  }
  onFileSelected5(event) {
    // console.log(event);
    this.selectedFile5 = <File>event.target.files[0];
    console.log(this.selectedFile5);
  }

}
