import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levels-land',
  templateUrl: './levels-land.component.html',
  styleUrls: ['./levels-land.component.css']
})
export class LevelsLandComponent implements OnInit {

  selectedOption="Role : Researcher";

  ResearcherProfile:boolean=true;
  ResearcherPurchase:boolean=false;
  InstituteProfile:boolean=true;
  Level2InstrumentManagement:boolean=false;
  AllInstruments:boolean=false
  ViewOrders:boolean=false
  ViewAccepted:boolean=false
  PaidOrders:boolean=false


  options= [
    {value: 'Role : Researcher',viewValue:'Click to switch to Role Researcher'},
    {value: 'Role : Level2',viewValue:'Click to switch to Role Level2'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSelect(value){
    this.selectedOption=value;
    if(value==='Role : Researcher'){
      this.ResearcherProfile=true
    }else if(value==='Role : Level2'){
      this.InstituteProfile=true
    }
  }

  initial(){
    this.InstituteProfile=false
    this.Level2InstrumentManagement=false
    this.ResearcherProfile=false
    this.ResearcherPurchase=false
    this.AllInstruments=false
    this.ViewOrders=false
    this.ViewAccepted=false
    this.PaidOrders=false
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

  onAllInstruemts(){
    this.initial()
    this.AllInstruments=true
  }

  onViewOrders(){
    this.initial()
    this.ViewOrders=true
  }

  onViewAccepted(){
    this.initial()
    this.ViewAccepted=true
  }

  onPaidOrders(){
    this.initial()
    this.PaidOrders=true
  }
}

