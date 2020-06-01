import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header-common',
  templateUrl: './header-common.component.html',
  styleUrls: ['./header-common.component.css']
})
export class HeaderCommonComponent implements OnInit {

  selectedOption:string;

  ResearcherProfile:boolean=false;
  ResearcherPurchase:boolean=false;


  options= [
    {value: 'researcher',viewValue:'Switch to Role Researcher'},
    {value: 'level0',viewValue:'Switch to Role Level0'}
  ];

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.getToken())
  }

  onChangeSelect(value){
    this.selectedOption=value;

  }

  initial(){
    this.ResearcherProfile=false
    this.ResearcherPurchase=false
  }


  onResearcherProfile(){
    this.initial()
    this.ResearcherProfile=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase)
  }

  onResearcherPurchase(){
    this.initial()
    this.ResearcherPurchase=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase)

  }


}
