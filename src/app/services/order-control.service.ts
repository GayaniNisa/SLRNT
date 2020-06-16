import { Injectable } from '@angular/core';
import { Instrument, User } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

export interface Order{
  instrumentId:string,
  orderedBy: string,
  custodianId:string,
  startDate:Date,
  endDate:Date,
  orderPrice:string,
  state:number
}
export interface OrderPending{
  _id:string,
  createdAt:Date,
  custodianId: string,
  endDate:Date,
  instrumentId:Instrument,
  orderPrice:string,
  orderedBy:string,
  startDate:Date,
  state:number,
  updateAt:Date
}

export interface Payment{
  _id:string,
  createdAt:Date,
  custodianId: string,
  endDate:Date,
  instrumentId:Instrument,
  orderPrice:string,
  orderedBy:string,
  startDate:Date,
  state:number,
  updateAt:Date
}
export interface OrderPaid{
  _id:string,
  createdAt:Date,
  custodianId: string,
  instrumentId:Instrument,
  orderId:string,
  payedBy:User,
  paymentDate:Date,
  orderPrice:string,
  state:number,
  updateAt:Date
}

export interface OrderAccepted{
  _id:string,
  createdAt:Date,
  custodianId: string,
  endDate:Date,
  instrumentId:Instrument,
  orderPrice:string,
  orderedBy:string,
  startDate:Date,
  state:number,
  updateAt:Date
}

@Injectable({
  providedIn: 'root'
})
export class OrderControlService {
  BASE_URL='http://localhost:8080'
  // BASE_URL='http://labnet.lk:8080'

  constructor(public http:HttpClient) { }

  getInstrumentListByTopRatings(){
    // this.router.navigate(['order/all',name])
    return this.http.get<{instrumentList:Instrument[],message:string,success:boolean}>(this.BASE_URL+'/get/instruments/withoutAuth')
  }

  getAllInstrumentByName(name:string){
    console.log("hello")
    return this.http.get<{instrumentList:Instrument[],randomInstrumentList:Instrument[],message:string,success:boolean}>(this.BASE_URL+'/get/instruments/'+name)
  }

  getInstrumentDetailsById(instrumentId:string){
    return this.http.get<{instrument:Instrument,message:string,success:boolean}>(this.BASE_URL+'/get/no-auth-instrument/'+instrumentId)
  }

  getInstrumentAvailability(dateRange:Date[],instrumentId:string){
    let availabilityRequest={instrumentId:instrumentId,startDate:dateRange[0],endDate:dateRange[1]}
    return this.http.post<{success:Boolean,message:string}>(this.BASE_URL+'/get/order/availability',availabilityRequest);
  }

  addOrderForRequest(instrumentId:string,dateRange:Date[]){
    let availabilityRequest={instrumentId:instrumentId,startDate:dateRange[0],endDate:dateRange[1]}
    return this.http.post<{success:Boolean,message:string}>(this.BASE_URL+'/add/order',availabilityRequest);
  }

  getAllPendingOrders(){
    return this.http.get<{PendingOrdersList:OrderPending[],message:string,success:boolean}>(this.BASE_URL+'/get/pending-orders')
  }

  getAllPaidOrders(){
    return this.http.get<{paymentList:OrderPaid[],message:string,success:boolean}>(this.BASE_URL+'/custodian-request/get-payment-list')
  }


  AcceptOrderOrRejectOrder(orderId:string,state:number){
    let AcceptOrRejectData={orderId:orderId,state:state}
    return this.http.post<{success:Boolean,message:string}>(this.BASE_URL+'/change/order-state',AcceptOrRejectData);
  }

  getAllAcceptedOrders(){
    return this.http.get<{AcceptedOrdersList:OrderAccepted[],message:string,success:boolean}>(this.BASE_URL+'/get/accepted-orders')
  }

  getUserAllOrders(){
    return this.http.get<{orderList:OrderPending,message:string,success:boolean}>(this.BASE_URL+'/get/user-orders')
  }

  getOrderDetailsByOrderId(orderId:string){
    // /get/user-orders-with-payment/:orderId
    return this.http.get<{order:OrderPending,payment:Payment,message:string,success:boolean}>(this.BASE_URL+'/get/user-orders-with-payment/'+orderId)
  }

  callOrderSuccess(orderId:string){
    let orderDetails={orderId:orderId}
    return this.http.post<{success:Boolean,message:string}>(this.BASE_URL+'/add/payment',orderDetails);
  }

  addReviewToInstrument(instrumentId:string,review:string){
    let reviewData={instrumentId:instrumentId,review:review}
    return this.http.post<{success:Boolean,message:string}>(this.BASE_URL+'/add/instrument-reviews',reviewData);
  }

  addRatingToInstrument(instrumentId,rateValue){
    let ratingData={instrumentId:instrumentId,rating:rateValue}
    return this.http.post<{success:Boolean,message:string}>(this.BASE_URL+'/update/instrument-rating',ratingData);
  }

  changePaymentStatusByCustodian(orderId:string,instrumentId:string,state:number){
    let paymentStatusDetails={orderId:orderId,instrumentId:instrumentId,state:state}
    return this.http.post<{success:Boolean,message:string}>(this.BASE_URL+'/custodian-request/payment-state-change',paymentStatusDetails);
  }
}

