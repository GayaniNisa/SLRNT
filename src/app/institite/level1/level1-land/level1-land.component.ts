import { Component, OnInit } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-level1-land',
  templateUrl: './level1-land.component.html',
  styleUrls: ['./level1-land.component.css']
})
export class Level1LandComponent implements OnInit {

  selectedOption="Role : Researcher";

  selectedValue='dfsf'

  ResearcherProfile:boolean=false;
  ResearcherPurchase:boolean=false;
  InstituteProfile:boolean=false;
  Level0DepartmentAdd:boolean=false;

  options= [
    {value: 'Role : Researcher',viewValue:'Click to switch to Role Researcher'},
    {value: 'Role : Level1',viewValue:'Click to switch to Role Level0'}
  ];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSelect(value){
    this.selectedOption=value;
    console.log(this.selectedOption)
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
