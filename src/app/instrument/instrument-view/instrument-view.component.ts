import { Component, OnInit } from '@angular/core';
import { InstrumentControlService } from 'src/app/services/instrument-control.service';
import { Instrument } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-instrument-view',
  templateUrl: './instrument-view.component.html',
  styleUrls: ['./instrument-view.component.css']
})
export class InstrumentViewComponent implements OnInit {

  instrumentList:Instrument[];

  constructor(public instrumentControl:InstrumentControlService) { }

  ngOnInit(): void {
    this.instrumentControl.getAllInstrumentsWithinInstititue()
    .subscribe(data=>{
      this.instrumentList=data.instrumentList
      console.log(this.instrumentList)
    })
  }
}
