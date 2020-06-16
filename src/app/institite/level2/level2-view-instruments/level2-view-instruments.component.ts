import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/auth/auth.service';
import { InstrumentControlService } from 'src/app/services/instrument-control.service';

@Component({
  selector: 'app-level2-view-instruments',
  templateUrl: './level2-view-instruments.component.html',
  styleUrls: ['./level2-view-instruments.component.css']
})
export class Level2ViewInstrumentsComponent implements OnInit {

  instrumentList:Instrument[];

  constructor(public instrumentControl:InstrumentControlService) { }

  ngOnInit(): void {
    this.instrumentControl.getAllInstrumentsResponsibleForCustodian()
    .subscribe(data=>{
      this.instrumentList=data.instrumentList
      console.log(this.instrumentList)
    })
  }
}
