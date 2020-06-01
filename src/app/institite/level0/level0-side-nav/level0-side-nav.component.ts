import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level0-side-nav',
  templateUrl: './level0-side-nav.component.html',
  styleUrls: ['./level0-side-nav.component.css']
})
export class Level0SideNavComponent implements OnInit {
  selectedOption="Role : Level0";

  ResearcherProfile:boolean=false;
  ResearcherPurchase:boolean=false;
  InstituteProfile:boolean=false;
  Level0DepartmentAdd:boolean=false;

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
    this.Level0DepartmentAdd=false
    this.ResearcherProfile=false
    this.ResearcherPurchase=false
  }


  onResearcherProfile(){
    this.initial()
    this.ResearcherProfile=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level0DepartmentAdd)
  }

  onResearcherPurchase(){
    this.initial()
    this.ResearcherPurchase=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level0DepartmentAdd)
  }

  onInstituteProfile(){
    this.initial()
    this.InstituteProfile=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level0DepartmentAdd)
  }

  onLevel0DepartmentAdd(){
    this.initial()
    this.Level0DepartmentAdd=true
    console.log(this.ResearcherProfile+" "+this.ResearcherPurchase+" "+this.InstituteProfile+" "+this.Level0DepartmentAdd)
  }

}
