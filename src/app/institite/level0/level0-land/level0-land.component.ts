import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level0-land',
  templateUrl: './level0-land.component.html',
  styleUrls: ['./level0-land.component.css']
})
export class Level0LandComponent implements OnInit {

  selectedOption="Role : Researcher";

  ResearcherProfile:boolean=false;
  ResearcherPurchase:boolean=false;
  InstituteProfile:boolean=false;
  Level1InstrumentsAdd:boolean=false;

  options= [
    {value: 'Role : Researcher',viewValue:'Click to switch to Role Researcher'},
    {value: 'Role : Level0',viewValue:'Click to switch to Role Level0'}
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
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level1InstrumentsAdd)
  }

  onResearcherPurchase(){
    this.initial()
    this.ResearcherPurchase=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level1InstrumentsAdd)
  }

  onInstituteProfile(){
    this.initial()
    this.InstituteProfile=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level1InstrumentsAdd)
  }

  onLevel1InstrumentsAdd(){
    this.initial()
    this.Level1InstrumentsAdd=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level1InstrumentsAdd)
  }
}
