import { Component, OnInit } from '@angular/core';
import { Instrument } from 'src/app/auth/auth.service';
import { InstrumentControlService } from 'src/app/services/instrument-control.service';
import { MatDialog } from '@angular/material/dialog';
import { InstrumentEditComponent } from '../instrument-edit/instrument-edit.component';
import { InstrumentDeleteComponent } from '../instrument-delete/instrument-delete.component';

@Component({
  selector: 'app-level1-view-instruments',
  templateUrl: './level1-view-instruments.component.html',
  styleUrls: ['./level1-view-instruments.component.css']
})
export class Level1ViewInstrumentsComponent implements OnInit {

  success:boolean;

  instrumentList:Instrument[];

  constructor(public instrumentControl:InstrumentControlService,public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("success"+this.success)
    this.instrumentControl.getAllInstrumentsWithinDepartment()
    .subscribe(data=>{
      this.instrumentList=data.instrumentList
      console.log(this.instrumentList)
    })
  }

  openDialogEdit(instrumentId:string) {
    const dialogRef = this.dialog.open(InstrumentEditComponent);
    dialogRef.componentInstance.instrumentId=instrumentId

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit()
    });
  }
  openDialogDelete(instrumentId:string) {
    const dialogRef = this.dialog.open(InstrumentDeleteComponent);
    dialogRef.componentInstance.instrumentId=instrumentId

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.ngOnInit()
    });
  }

}
