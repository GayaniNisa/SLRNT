import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levels-land',
  templateUrl: './levels-land.component.html',
  styleUrls: ['./levels-land.component.css']
})
export class LevelsLandComponent implements OnInit {

  selectedOption="Role : Researcher";

  ResearcherProfile:boolean=false;
  ResearcherPurchase:boolean=false;
  InstituteProfile:boolean=false;
  Level2InstrumentManagement:boolean=false;

  options= [
    {value: 'Role : Researcher',viewValue:'Click to switch to Role Researcher'},
    {value: 'Role : Level2',viewValue:'Click to switch to Role Level0'}
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
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level2InstrumentManagement)
  }

  onResearcherPurchase(){
    this.initial()
    this.ResearcherPurchase=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level2InstrumentManagement)
  }

  onInstituteProfile(){
    this.initial()
    this.InstituteProfile=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level2InstrumentManagement)
  }

  onLevel2InstrumentManagement(){
    this.initial()
    this.Level2InstrumentManagement=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level2InstrumentManagement)
  }

}
