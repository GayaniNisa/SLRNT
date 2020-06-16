import { Component, OnInit } from '@angular/core';
import { InstrumentControlService } from 'src/app/services/instrument-control.service';

@Component({
  selector: 'app-instrument-state-change',
  templateUrl: './instrument-state-change.component.html',
  styleUrls: ['./instrument-state-change.component.css']
})
export class InstrumentStateChangeComponent implements OnInit {
  instrumentId:string

  constructor(public instrumentControl:InstrumentControlService) { }

  ngOnInit(): void {
  }

  onHoldInstrument(){
    this.instrumentControl.level2HoldInstrument(this.instrumentId)
    .subscribe(data=>{
      console.log(data)
    })
  }

  onAvailableInstrument(){
    this.instrumentControl.level2AvailableInstrument(this.instrumentId)
    .subscribe(data=>{
      console.log(data)
    })
  }
}
