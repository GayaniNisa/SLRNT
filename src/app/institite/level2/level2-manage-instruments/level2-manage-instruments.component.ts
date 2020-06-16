import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/auth/auth.service';
import { InstrumentControlService } from 'src/app/services/instrument-control.service';
import { MatDialog } from '@angular/material/dialog';
import { InstrumentStateChangeComponent } from '../instrument-state-change/instrument-state-change.component';

@Component({
  selector: 'app-level2-manage-instruments',
  templateUrl: './level2-manage-instruments.component.html',
  styleUrls: ['./level2-manage-instruments.component.css']
})
export class Level2ManageInstrumentsComponent implements OnInit {

  success:boolean;

  instrumentList:Instrument[];

  constructor(public instrumentControl:InstrumentControlService,public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("success"+this.success)
    this.instrumentControl.getAllInstrumentsResponsibleForCustodian()
    .subscribe(data=>{
      this.instrumentList=data.instrumentList
      console.log(this.instrumentList)
    })
  }

  openDialogState(instrumentId:string) {
    const dialogRef = this.dialog.open(InstrumentStateChangeComponent);
    dialogRef.componentInstance.instrumentId=instrumentId

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit()
    });
  }
  openDialogAvialable(instrumentId:string) {
    const dialogRef = this.dialog.open(InstrumentStateChangeComponent);
    dialogRef.componentInstance.instrumentId=instrumentId

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit()
    });
  }


}
