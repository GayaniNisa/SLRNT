import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instrument } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InstrumentControlService {
  BASE_URL='http://localhost:8080'
  // BASE_URL='http://labnet.lk:8080';

  constructor(public http:HttpClient) { }


  addInstrument(instrumentFormData){
    return this.http.post<{Instrument,message:string,success:boolean}>(this.BASE_URL+'/add/instrument',instrumentFormData);
  }

  deleteInstrumentLevel0(instrumentId:string){
    return this.http.delete<{message:string,success:boolean}>(this.BASE_URL+"/delete/instrument/"+instrumentId)
  }

  updateInstrumentLevel0(instrumentId:string,instrumentUpdateFormData){
    // /update/instrument/:instrumentId
    return this.http.put<{message:string,success:boolean}>(this.BASE_URL+"/update/instrument/"+instrumentId,instrumentUpdateFormData)
  }

  getAllInstrumentsWithinInstititue(){
    return this.http.get<{instrumentList:Instrument[],succss:boolean}>(this.BASE_URL+'/get/institute/all-instruments')
  }

  getAllInstrumentsWithinDepartment(){
    return this.http.get<{instrumentList:Instrument[],succss:boolean}>(this.BASE_URL+'/get/department/all-instruments')
  }

  getAllInstrumentsResponsibleForCustodian(){
    return this.http.get<{instrumentList:Instrument[],succss:boolean}>(this.BASE_URL+'/get/instruments')
  }

  level2HoldInstrument(instrumentId:string){
    let holdState={state:0,instrumentId:instrumentId}
    return this.http.post<{message:string,succss:boolean}>(this.BASE_URL+'/update/instrument/state',holdState)
  }

  level2AvailableInstrument(instrumentId:string){
    let holdState={state:1,instrumentId:instrumentId}
    return this.http.post<{message:string,succss:boolean}>(this.BASE_URL+'/update/instrument/state',holdState)
  }
}
