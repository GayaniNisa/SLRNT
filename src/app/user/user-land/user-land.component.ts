import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-land',
  templateUrl: './user-land.component.html',
  styleUrls: ['./user-land.component.css']
})
export class UserLandComponent implements OnInit {

  selectedOption="Role : Researcher";

  ResearcherProfile:boolean=false;
  ResearcherPurchase:boolean=false;



  constructor() { }

  ngOnInit(): void {
  }


  initial(){
    this.ResearcherProfile=false
    this.ResearcherPurchase=false
  }


  onResearcherProfile(){
    this.initial()
    this.ResearcherProfile=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" ")
  }

  onResearcherPurchase(){
    this.initial()
    this.ResearcherPurchase=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" ")
  }



}
