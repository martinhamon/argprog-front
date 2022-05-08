import { Injectable } from '@angular/core';
import { shareReplay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {


  private sendMessageSubject = new Subject<any>()
  sendMessageObservable  = this.sendMessageSubject.asObservable()
  constructor() { }
  sendMessage(object : any)
  {

    this.sendMessageSubject.next(object)
  }


}
