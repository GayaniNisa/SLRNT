import { Component, OnInit } from '@angular/core';
import { InstrumentControlService } from 'src/app/services/instrument-control.service';
import { Instrument } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-level0-view-instruments',
  templateUrl: './level0-view-instruments.component.html',
  styleUrls: ['./level0-view-instruments.component.css']
})
export class Level0ViewInstrumentsComponent implements OnInit {

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
