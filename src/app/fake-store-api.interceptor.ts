import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from "rxjs/operators";
import {ResponseStateService} from "./response-state.service";

@Injectable()
export class FakeStoreApiInterceptor implements HttpInterceptor {

  constructor(private responseStateService: ResponseStateService) {
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('Interceptor called', request);

    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log(event.body)
          this.responseStateService.setResponse(event.body);
        }
      })
    )
  }
}
