import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-common0',
  templateUrl: './header-common0.component.html',
  styleUrls: ['./header-common0.component.css']
})
export class HeaderCommon0Component implements OnInit {

  selectedOption:string;

  ResearcherProfile:boolean=false;
  ResearcherPurchase:boolean=false;
  InstituteProfile:boolean=false;
  Level0DepartmentAdd:boolean=false;

  options= [
    {value: 'researcher',viewValue:'Switch to Role Researcher'},
    {value: 'level0',viewValue:'Switch to Role Level0'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSelect(value){
    this.selectedOption=value;

  }

  initial(){
    this.InstituteProfile=false
    this.Level0DepartmentAdd=false
    this.ResearcherProfile=false
    this.ResearcherPurchase=false
  }


  onResearcherProfile(){
    this.initial()
    this.ResearcherProfile=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level0DepartmentAdd)
  }

  onResearcherPurchase(){
    this.initial()
    this.ResearcherPurchase=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level0DepartmentAdd)
  }

  onInstituteProfile(){
    this.initial()
    this.InstituteProfile=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level0DepartmentAdd)
  }

  onLevel0DepartmentAdd(){
    this.initial()
    this.Level0DepartmentAdd=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level0DepartmentAdd)
  }




}
