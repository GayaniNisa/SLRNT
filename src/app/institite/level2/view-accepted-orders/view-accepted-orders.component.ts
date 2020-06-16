import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/auth/auth.service';
import { OrderControlService } from 'src/app/services/order-control.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-accepted-orders',
  templateUrl: './view-accepted-orders.component.html',
  styleUrls: ['./view-accepted-orders.component.css']
})
export class ViewAcceptedOrdersComponent implements OnInit {

  instrumentList;

  instrumentImg:string;

  constructor(public orderControl:OrderControlService,public router:Router) { }

  ngOnInit(): void {
    this.orderControl.getAllAcceptedOrders()
    .subscribe(data=>{
      console.log(data)
      this.instrumentList=data.AcceptedOrdersList

    })
  }

}
