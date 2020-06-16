import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { OrderControlService } from 'src/app/services/order-control.service';
import { InstrumentControlService } from 'src/app/services/instrument-control.service';
import { Instrument, AuthService } from 'src/app/auth/auth.service';

declare var $:any;

@Component({
  selector: 'app-order-instrument',
  templateUrl: './order-instrument.component.html',
  styleUrls: ['./order-instrument.component.css']
})
export class OrderInstrumentComponent implements OnInit {

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
  rating:number=0;

  rating1:number

  ratingView=4


  start;
  end;

  availabilityBooked:boolean=false;
  okMsg:string;
  availabilityNotBooked:boolean=false;
  notMsg:string;
  availabilityDisabled:boolean=false;

  maxDate:Date;

  instrument:Instrument;

  signUpWarningMsg:string;
  signUpWarningMsgStatus:boolean=false;

  orderOk:boolean=false;
  orderOkMsg:string;
  orderNotOk:boolean=false;
  orderNotOkMsg:string;

  constructor(public authService:AuthService,public router:Router,public route:ActivatedRoute,public orderControl:OrderControlService,public instrumentControl:InstrumentControlService){
    this.maxDate = new Date();

    this.maxDate.setDate(this.maxDate.getDate());
  }

  ngOnInit() {
    this.signUpWarningMsg=''

    // let BASE_URL='http://localhost:8080/'
    this.instrumentId = this.route.snapshot.params['id']
    this.orderControl.getInstrumentDetailsById(this.instrumentId)
    .subscribe(data=>{
      this.instrument=data.instrument
      this.brand=data.instrument.brand
      this.model=data.instrument.modal
      this.description=data.instrument.description
      this.price=data.instrument.price
      this.manufacturedDate=data.instrument.manufacturedDate
      this.depriciatedDate=data.instrument.depricatedDate
      this.specifications=data.instrument.technicalSpecificationList
      this.strengths=data.instrument.strengthsList
      this.limitations=data.instrument.limitationsList
      this.applications=data.instrument.applicationList
      this.rating=Number(data.instrument.rating)
      console.log(data)
      console.log(data.instrument.rating)
    })

  //   $('.datePickerSelector').datepicker({
  //     daysOfWeekDisabled: [0,6]
  // });

    $('.str1').on({
      mouseover: function(){
          $('.star1').css({color: 'yellow'});
      },
       mouseleave: function(){
          $('.star1').css({color: 'gray'});
      },
      click: function(){
        $('.star1').css({color: 'yellow'});
        $('.ex1').css({color: 'gray'});
          $('.star1').off('mouseleave');
          $('.star1').off('mouseover');
      }
  });

  $('.str2').on({
    mouseover: function(){
        $('.star2').css({color: 'yellow'});
    },
     mouseleave: function(){
        $('.star2').css({color: 'gray'});
    },
    click: function(){
      $('.star2').css({color: 'yellow'});
      $('.ex2').css({color: 'gray'});
        $('.star2').off('mouseleave');
        $('.star2').off('mouseover');
    }
});

$('.str3').on({
  mouseover: function(){
      $('.star3').css({color: 'yellow'});
  },
   mouseleave: function(){
      $('.star3').css({color: 'gray'});
  },
  click: function(){
    $('.star3').css({color: 'yellow'});
    $('.ex3').css({color: 'gray'});
      $('.star3').off('mouseleave');
      $('.star3').off('mouseover');
  }
});

$('.str4').on({
  mouseover: function(){
      $('.star4').css({color: 'yellow'});
  },
   mouseleave: function(){
      $('.star4').css({color: 'gray'});
  },
  click: function(){
    $('.star4').css({color: 'yellow'});
    $('.ex4').css({color: 'gray'});
      $('.star4').off('mouseleave');
      $('.star4').off('mouseover');
  }
});

$('.str5').on({
  mouseover: function(){
      $('.star5').css({color: 'yellow'});
  },
   mouseleave: function(){
      $('.star5').css({color: 'gray'});
  },
  click: function(){
    $('.star5').css({color: 'yellow'});
    $('.ex5').css({color: 'gray'});
      $('.star5').off('mouseleave');
      $('.star5').off('mouseover');
  }
});

$('#exampleModalLongReserve').on('hidden.bs.modal', function(){
        $('#msgWarn').hide()
    });


  }

  orderConfirm(){
    let loggedInStatus=this.authService.isLoggedIn()
    if(loggedInStatus===false){
      this.signUpWarningMsgStatus=true
      this.signUpWarningMsg='Before Reserving instruemnt,please signup first'
      return
    }else{
      // /add/order

      this.orderControl.addOrderForRequest(this.instrumentId,this.bookedRange)
      .subscribe(data=>{
        console.log(data)
        this.orderOk=true
        this.orderOkMsg=data.message
      },error=>{
        this.orderNotOk=true
        this.orderNotOkMsg=error.message
      })
    }
  }

  checkAvailability(){
    console.log(this.bookedRange)
    this.availabilityBooked=false
    this.availabilityNotBooked=false
    this.orderControl.getInstrumentAvailability(this.bookedRange,this.instrumentId)
    .subscribe(data=>{
      console.log(data)
      if(data.message==="Instrument is Not available"){
        this.availabilityBooked=true
        this.notMsg=data.message
      }else if(data.message==="Instrument is Available"){
        this.availabilityNotBooked=true
        this.okMsg=data.message
        this.start=this.bookedRange[0]
        this.end=this.bookedRange[1]
      }
    })
  }

  onStar1(){
    this.rating1=4
  }

}
