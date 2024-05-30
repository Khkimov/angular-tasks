// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FakeStoreApiInterceptor } from './fake-store-api.interceptor';
import {ResponseStateService} from "./response-state.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ResponseStateService,
    { provide: HTTP_INTERCEPTORS, useClass: FakeStoreApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
