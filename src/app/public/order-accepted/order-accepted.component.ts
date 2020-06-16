import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, Instrument } from 'src/app/auth/auth.service';
import { OrderControlService } from 'src/app/services/order-control.service';
import { InstrumentControlService } from 'src/app/services/instrument-control.service';
import { FormGroup, FormControl } from '@angular/forms';

declare var $: any;
declare var payhere: any;

@Component({
  selector: 'app-order-accepted',
  templateUrl: './order-accepted.component.html',
  styleUrls: ['./order-accepted.component.css']
})
export class OrderAcceptedComponent implements OnInit {

  checkDate;
  instrumentId;
  instrumentName;
  // instrument;
  brand;
  model;
  description;
  specifications;
  strengths;
  limitations;
  applications;

  bookedRange;

  manufacturedDate;
  depriciatedDate;
  price;
  priceString:string;
  rating;

  rating1: number

  ratingView = 4


  start;
  end;

  availabilityBooked: boolean = false;
  okMsg: string;
  availabilityNotBooked: boolean = false;
  notMsg: string;
  availabilityDisabled: boolean = false;

  maxDate: Date;

  instrument: Instrument;
  formReview:FormGroup;

  signUpWarningMsg: string;
  signUpWarningMsgStatus: boolean = false;

  orderId: string;
  paymentStatus:boolean=false;

  payment;

  rateValue:number=0;

  ratingOk:boolean=false;
  ratingOkMsg:string;
  ratingNotOk:boolean=false;
  ratingNotOkMsg:string;

  reviewOk:boolean=false;
  reviewOkMsg:string;
  reviewNotOk:boolean=false;
  reviewNotOkMsg:string;

  reviewLi

  constructor(public authService: AuthService, public router: Router, public route: ActivatedRoute, public orderControl: OrderControlService, public instrumentControl: InstrumentControlService) {
    this.maxDate = new Date();

    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit() {
    this.formReview=new FormGroup({
      review:new FormControl('')
    })

    var self=this
    this.orderId = this.route.snapshot.params['orderId']

    payhere.onCompleted = function onCompleted(orderId) {
      console.log("Payment completed. OrderID:" + orderId);
      this.paymentStatus=true
      console.log("status changed "+this.paymentStatus)
      callOk(orderId)
      //Note: validate the payment and show success or failure page to the customer
    };
    function callOk(orderId){
      // alert("okkkk")
      console.log("call")

      self.orderControl.callOrderSuccess(orderId)
      .subscribe(data=>{
        console.log(data)
        // alert("okkkkkkkkkkk")
      })
    }

    // Called when user closes the payment without completing
    payhere.onDismissed = function onDismissed() {
      //Note: Prompt user to pay again or show an error page
      console.log("Payment dismissed");
    };

    // Called when error happens when initializing payment such as invalid parameters
    payhere.onError = function onError(error) {
      // Note: show an error page
      console.log("Error:" + error);
    };

    var payment = {
      "sandbox": true,
      "merchant_id": "1212702",       // Replace your Merchant ID
      "return_url": "http://sample.com/return",
      "cancel_url": "http://sample.com/cancel",
      "notify_url": "http://sample.com/notify",
      "order_id": this.orderId,
      "items": this.instrumentName,
      "amount": "1000.00",
      "currency": "LKR",
      "first_name": "Saman",
      "last_name": "Perera",
      "email": "samanp@gmail.com",
      "phone": "0771234567",
      "address": "No.1, Galle Road",
      "city": "Colombo",
      "country": "Sri Lanka",
      "delivery_address": "No. 46, Galle road, Kalutara South",
      "delivery_city": "Kalutara",
      "delivery_country": "Sri Lanka",
      "custom_1": "",
      "custom_2": ""
    };


    // Show the payhere.js popup, when "PayHere Pay" is clicked
    document.getElementById('payhere-payment').onclick = function (e) {
      console.log("on payment")
      payhere.startPayment(payment);
    };

    this.orderControl.getOrderDetailsByOrderId(this.orderId)
      .subscribe(data => {
        console.log(data)
        this.payment=data.payment
        this.instrument = data.order.instrumentId
        this.instrumentId = data.order.instrumentId._id
        this.brand = data.order.instrumentId.brand
        this.model = data.order.instrumentId.modal
        this.description = data.order.instrumentId.description
        this.price = data.order.instrumentId.price
        this.priceString=<string>(this.price+'.00')
        this.manufacturedDate = data.order.instrumentId.manufacturedDate
        this.depriciatedDate = data.order.instrumentId.depricatedDate
        this.specifications = data.order.instrumentId.technicalSpecificationList
        this.strengths = data.order.instrumentId.strengthsList
        this.limitations = data.order.instrumentId.limitationsList
        this.applications = data.order.instrumentId.applicationList
        this.rating = data.order.instrumentId.rating
        this.start = data.order.startDate
        this.end = data.order.endDate
        this.price = data.order.orderPrice

      })

    this.signUpWarningMsg = ''

    // let BASE_URL='http://localhost:8080/'
    // this.instrumentId = this.route.snapshot.params['id']
    // this.orderControl.getInstrumentDetailsById(this.instrumentId)
    // .subscribe(data=>{
    //   this.instrument=data.instrument
    //   this.brand=data.instrument.brand
    //   this.model=data.instrument.modal
    //   this.description=data.instrument.description
    //   this.price=data.instrument.price
    //   this.manufacturedDate=data.instrument.manufacturedDate
    //   this.depriciatedDate=data.instrument.depricatedDate
    //   this.specifications=data.instrument.technicalSpecificationList
    //   this.strengths=data.instrument.strengthsList
    //   this.limitations=data.instrument.limitationsList
    //   this.applications=data.instrument.applicationList
    //   this.rating=data.instrument.rating
    //   console.log(data)
    //   console.log(data.instrument.rating)
    // })

    //   $('.datePickerSelector').datepicker({
    //     daysOfWeekDisabled: [0,6]
    // });



  }


  onPaymentSuccessCall() {
    console.log("call")

    if(this.paymentStatus===true){
      console.log("payment done")
    }
  }

  onStarClickView(rateValue:number){
    this.rateValue=rateValue
    console.log(this.rateValue)
  }

  onStar1(){

  }

  onSubmitReview(){
    if(this.formReview.value.review===''){
      return
    }else{
    this.orderControl.addReviewToInstrument(this.instrumentId,this.formReview.value.review)
    .subscribe(data=>{
      console.log(data)
      this.reviewOk=true
      this.reviewOkMsg=data.message
      this.ngOnInit()
    },error=>{
      this.reviewNotOk=true
      this.reviewNotOkMsg=error.message
    })
  }
  }

  onSaveRating(){
    console.log("on save rating"+this.instrumentId+" "+this.rateValue)
    this.orderControl.addRatingToInstrument(this.instrumentId,this.rateValue)
    .subscribe(data=>{
      console.log(data)
      this.ratingOk=true
      this.ratingOkMsg=data.message
      this.ngOnInit()
    },error=>{
      this.ratingNotOk=true
      this.ratingNotOkMsg=error.message
    })
  }
}
