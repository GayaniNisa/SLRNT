import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderControlService } from 'src/app/services/order-control.service';
import { Instrument } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-order-land',
  templateUrl: './order-land.component.html',
  styleUrls: ['./order-land.component.css']
})
export class OrderLandComponent implements OnInit {

  instrumentList:Instrument[] =[]
  randomInstrumentList:Instrument[]=[]

  constructor(public route:ActivatedRoute,public orderControl:OrderControlService,public router:Router) { }

  ngOnInit(): void {
    let searchedName=this.route.snapshot.params['name'];
    console.log(searchedName)

    this.orderControl.getAllInstrumentByName(searchedName)
    .subscribe(data=>{
      console.log(data)
      this.instrumentList=data.instrumentList
      this.randomInstrumentList=data.randomInstrumentList
    })
  }

  onNavigateToInstrument(instrumentId:string){
    this.router.navigate(['instrument',instrumentId])
  }

}
