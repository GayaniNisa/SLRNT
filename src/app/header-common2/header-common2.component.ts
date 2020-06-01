import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-common2',
  templateUrl: './header-common2.component.html',
  styleUrls: ['./header-common2.component.css']
})
export class HeaderCommon2Component implements OnInit {

  selectedOption:string;

  ResearcherProfile:boolean=false;
  ResearcherPurchase:boolean=false;
  InstituteProfile:boolean=false;
  Level2InstrumentManagement:boolean=false;

  options= [
    {value: 'researcher',viewValue:'Switch to Role Researcher'},
    {value: 'level2',viewValue:'Switch to Role Level2'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSelect(value){
    this.selectedOption=value;

  }

  initial(){
    this.InstituteProfile=false
    this.Level2InstrumentManagement=false
    this.ResearcherProfile=false
    this.ResearcherPurchase=false
  }


  onResearcherProfile(){
    this.initial()
    this.ResearcherProfile=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level2InstrumentManagement)
  }

  onResearcherPurchase(){
    this.initial()
    this.ResearcherPurchase=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level2InstrumentManagement)
  }

  onInstituteProfile(){
    this.initial()
    this.InstituteProfile=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level2InstrumentManagement)
  }

  onLevel2InstrumentManagement(){
    this.initial()
    this.Level2InstrumentManagement=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level2InstrumentManagement)
  }



}
