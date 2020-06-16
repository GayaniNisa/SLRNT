import { Component, OnInit, Output } from '@angular/core';
import { InstrumentControlService } from 'src/app/services/instrument-control.service';
import { Instrument } from 'src/app/auth/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-instrument-delete',
  templateUrl: './instrument-delete.component.html',
  styleUrls: ['./instrument-delete.component.css']
})
export class InstrumentDeleteComponent implements OnInit {
  @Output('success') success:boolean

  instrumentId:string;

  constructor(public instrumentControl:InstrumentControlService) { }

  ngOnInit(): void {
    console.log(this.instrumentId)
  }

  onDeleteInstrument(){
    this.instrumentControl.deleteInstrumentLevel0(this.instrumentId)
    .subscribe(data=>{
      console.log(data)
      this.success=data.success
      this.ngOnInit()
    })
  }
}
