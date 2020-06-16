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



  minDate: Date;
  maxDate: Date;


  imagePreview1:string;
  isUploaded1:boolean=false;
  imagePreview2:string;
  isUploaded2:boolean=false;
  imagePreview3:string;
  isUploaded3:boolean=false
  imagePreview4:string;
  isUploaded4:boolean=false
  imagePreview5:string;
  isUploaded5:boolean=false

  addOkMsg:string;
  addNotOkMsg:string;

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
    this.strengths.forEach(element => {
      instrument.append("strengthsList",element)
    });

    this.limitations.forEach(element => {
      instrument.append("limitationsList",element)
    });

    this.applications.forEach(element => {
      instrument.append("applicationList",element)
    });

    this.specificationTechs.forEach(element => {
      instrument.append("technicalSpecificationList",element)
    });


    instrument.append("categoriesSet",JSON.stringify(null))
    instrument.append("manufacturedDate",this.manufacturedDate)
    instrument.append("depricatedDate",this.depriciatedDate)
    instrument.append("price",this.price)
    instrument.append("description",this.description)
    instrument.append("custodianEmail",this.custodianEmail)
    instrument.append("imageArr",this.selectedFile1)
    instrument.append("imageArr",this.selectedFile2)
    instrument.append("imageArr",this.selectedFile3)
    instrument.append("imageArr",this.selectedFile4)
    instrument.append("imageArr",this.selectedFile5)


console.log(instrument)
this.success=false
this.Nsuccess=false
    this.instrumentControll.addInstrument(instrument).subscribe(
      data => {
        this.success = true;
        console.log(data);
        this.addOkMsg=data.message
      },
      error => {
        this.Nsuccess = true;
        console.log(error);
        this.addNotOkMsg=error.message
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



  onFileSelected1(event) {
    // console.log(event);
    this.selectedFile1 = <File>event.target.files[0];
    console.log(this.selectedFile1);

    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    // this.form.patchValue({image:file})
    // this.form.get('image').updateValueAndValidity();
    // console.log(this.form)
    const reader = new FileReader()
    reader.onload= ()=>{
      this.imagePreview1=<string>(reader.result);
      let x= <string>(reader.result)
      console.log(this.imagePreview1)
    };
    reader.readAsDataURL(file)
    console.log(this.imagePreview1)
    this.isUploaded1=true;
  }
  onFileSelected2(event) {
    // console.log(event);
    this.selectedFile2 = <File>event.target.files[0];
    console.log(this.selectedFile2);

    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    // this.form.patchValue({image:file})
    // this.form.get('image').updateValueAndValidity();
    // console.log(this.form)
    const reader = new FileReader()
    reader.onload= ()=>{
      this.imagePreview2=<string>(reader.result);
      let x= <string>(reader.result)
      console.log(this.imagePreview2)
    };
    reader.readAsDataURL(file)
    console.log(this.imagePreview2)
    this.isUploaded2=true;

  }
  onFileSelected3(event) {
    // console.log(event);
    this.selectedFile3 = <File>event.target.files[0];
    console.log(this.selectedFile2);

    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    // this.form.patchValue({image:file})
    // this.form.get('image').updateValueAndValidity();
    // console.log(this.form)
    const reader = new FileReader()
    reader.onload= ()=>{
      this.imagePreview3=<string>(reader.result);
      let x= <string>(reader.result)
      console.log(this.imagePreview3)
    };
    reader.readAsDataURL(file)
    console.log(this.imagePreview3)
    this.isUploaded3=true;
  }
  onFileSelected4(event) {
    // console.log(event);
    this.selectedFile4 = <File>event.target.files[0];
    console.log(this.selectedFile4);

    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    // this.form.patchValue({image:file})
    // this.form.get('image').updateValueAndValidity();
    // console.log(this.form)
    const reader = new FileReader()
    reader.onload= ()=>{
      this.imagePreview4=<string>(reader.result);
      let x= <string>(reader.result)
      console.log(this.imagePreview4)
    };
    reader.readAsDataURL(file)
    console.log(this.imagePreview4)
    this.isUploaded4=true;
  }
  onFileSelected5(event) {
    // console.log(event);
    this.selectedFile5 = <File>event.target.files[0];
    console.log(this.selectedFile5);

    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    // this.form.patchValue({image:file})
    // this.form.get('image').updateValueAndValidity();
    // console.log(this.form)
    const reader = new FileReader()
    reader.onload= ()=>{
      this.imagePreview5=<string>(reader.result);
      let x= <string>(reader.result)
      console.log(this.imagePreview5)
    };
    reader.readAsDataURL(file)
    console.log(this.imagePreview5)
    this.isUploaded5=true;
  }

}
