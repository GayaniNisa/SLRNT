import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-common1',
  templateUrl: './header-common1.component.html',
  styleUrls: ['./header-common1.component.css']
})
export class HeaderCommon1Component implements OnInit {

  selectedOption:string;

  ResearcherProfile:boolean=false;
  ResearcherPurchase:boolean=false;
  InstituteProfile:boolean=false;
  Level1InstrumentsAdd:boolean=false;

  options= [
    {value: 'researcher',viewValue:'Switch to Role Researcher'},
    {value: 'level1',viewValue:'Switch to Role Level1'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSelect(value){
    this.selectedOption=value;

  }

  initial(){
    this.InstituteProfile=false
    this.Level1InstrumentsAdd=false
    this.ResearcherProfile=false
    this.ResearcherPurchase=false
  }


  onResearcherProfile(){
    this.initial()
    this.ResearcherProfile=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level1InstrumentsAdd)
  }

  onResearcherPurchase(){
    this.initial()
    this.ResearcherPurchase=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level1InstrumentsAdd)
  }

  onInstituteProfile(){
    this.initial()
    this.InstituteProfile=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level1InstrumentsAdd)
  }

  onLevel1InstrumentsAdd(){
    this.initial()
    this.Level1InstrumentsAdd=true
    console.log(this.ResearcherProfile+" "+this.InstituteProfile+" "+this.InstituteProfile+" "+this.Level1InstrumentsAdd)
  }



}
