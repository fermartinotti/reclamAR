import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import {TipoDeReclamo} from "../model/tipoDeReclamo";

@Injectable()
export class DataSenderService {
  private subject = new Subject<any>();

  sendData(tipoDeReclamo: TipoDeReclamo) {
    this.subject.next(tipoDeReclamo);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

}
