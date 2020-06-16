import { Component, OnInit } from '@angular/core';
import { OrderControlService } from 'src/app/services/order-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-paid-orders',
  templateUrl: './view-paid-orders.component.html',
  styleUrls: ['./view-paid-orders.component.css']
})
export class ViewPaidOrdersComponent implements OnInit {
  paymentList;

  instrumentImg:string;

  constructor(public orderControl:OrderControlService,public router:Router) { }

  ngOnInit(): void {
    this.orderControl.getAllPaidOrders()
    .subscribe(data=>{
      console.log(data)
      this.paymentList=data.paymentList

    })
  }

  // onNavigateToInstrument(instrumentId:string){
  //   this.router.navigate(['instrument',instrumentId])
  // }


  onChangePaymentStatus(orderId:string,instrumentId:string){
    console.log(orderId)
    let orderingId=orderId
    let instrumentID=instrumentId
    let state=1

    this.orderControl.changePaymentStatusByCustodian(orderingId,instrumentID,state)
    .subscribe(data=>{
      console.log(data)
    })

  }



}
