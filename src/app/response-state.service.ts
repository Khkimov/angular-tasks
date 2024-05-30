import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResponseStateService {

  private responseSubject = new BehaviorSubject<any>(null);

  constructor() { }

  setResponse(response: any): void {
    this.responseSubject.next(response);
  }

  getResponse(): Observable<any> {
    return this.responseSubject.asObservable();
  }

  // static setResponse(body: any) {
  //
  // }
}
