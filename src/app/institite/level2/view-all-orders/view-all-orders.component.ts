import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderControlService } from 'src/app/services/order-control.service';

@Component({
  selector: 'app-view-all-orders',
  templateUrl: './view-all-orders.component.html',
  styleUrls: ['./view-all-orders.component.css']
})
export class ViewAllOrdersComponent implements OnInit {

  instrumentList;

  instrumentImg:string;

  acceptOk:boolean=false;
  acceptOkMsg:string;
  acceptNotOk:boolean=false;
  acceptNotMsg:string;

  rejectOk:boolean=false;
  rejectOkMsg:string;
  rejectNotOk:boolean=false;
  rejectNotMsg:string;

  constructor(public orderControl:OrderControlService,public router:Router) { }

  ngOnInit(): void {
    this.orderControl.getAllPendingOrders()
    .subscribe(data=>{
      console.log(data)
      this.instrumentList=data.PendingOrdersList

    })
  }

  // onNavigateToInstrument(instrumentId:string){
  //   this.router.navigate(['instrument',instrumentId])
  // }

  onAcceptOrder(orderId:string){
    this.rejectOk=false
    this.rejectNotOk=false
    this.acceptOk=false
    this.acceptNotOk=false

    console.log(orderId)
    let orderingId=orderId
    let state=1

    this.orderControl.AcceptOrderOrRejectOrder(orderingId,state)
    .subscribe(data=>{
      console.log(data)
      this.acceptOk=true
      this.acceptOkMsg=data.message
    },error=>{
      this.acceptNotOk=true
      this.acceptNotMsg=error.message
    })

  }

  onRejectOrder(orderId:string){
    this.rejectOk=false
    this.rejectNotOk=false
    this.acceptOk=false
    this.acceptNotOk=false
    console.log(orderId)
    let orderingId=orderId
    let state=2

    this.orderControl.AcceptOrderOrRejectOrder(orderingId,state)
    .subscribe(data=>{
      console.log(data)
      this.rejectOk=true
      this.rejectOkMsg=data.message
    },error=>{
      this.rejectNotOk=true
      this.rejectNotMsg=error.message
    })

  }

  onNavigateInstituteProfile(instituteId:string){
    console.log(instituteId)
    // this.router.navigate(['public/institute',instituteId])
    window.open(`public/institute/${instituteId}`)
  }

  onNavigateUserProfile(orderedById:string){
    console.log(orderedById)
    // this.router.navigate(['public/user',orderedById])
    window.open(`public/user/${orderedById}`)
  }


}
