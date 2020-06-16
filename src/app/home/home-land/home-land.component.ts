import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderControlService } from 'src/app/services/order-control.service';
import { Instrument } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-land',
  templateUrl: './home-land.component.html',
  styleUrls: ['./home-land.component.css']
})
export class HomeLandComponent implements OnInit {
  form:FormGroup;

  instrumentTop:Instrument[]=[];

  constructor(public orderControl:OrderControlService,public router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      instrumentName: new FormControl(null)
    })
    this.orderControl.getInstrumentListByTopRatings()
    .subscribe(data=>{
      console.log(data)
      this.instrumentTop=data.instrumentList;
    })
  }

  onSearchName(){
    console.log(this.form.value.instrumentName)
    this.router.navigate(['order/all',this.form.value.instrumentName])

  }

  navigateInstrument(instrumentId:string){
    this.router.navigate(['instrument',instrumentId])
  }
}
