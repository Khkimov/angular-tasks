import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { retry, tap } from 'rxjs/operators';
import {ResponseStateService} from "./response-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    public http: HttpClient,
    private responseStateService: ResponseStateService
  ) {}

  products: any = [];
  selectedProduct: any = null;

  ngOnInit(): void {
    // console.log('ng On init');
    this.http.get('https://fakestoreapi.com/products', {
      params: new HttpParams().set('limit', '5')
    })
      .pipe(
        retry(2),
        tap((products) => {
          this.products = products;
        })
      ).subscribe();
  }

  getProductDetails(id: number):void {
    this.http.get(`https://fakestoreapi.com/products/${id}`)
    .pipe(
      // retry(2),
      // tap((product) => {
      //   // this.selectedProduct = product;
      //   console.log(this.selectedProduct);
      // })
    ).subscribe();

    this.responseStateService.getResponse().subscribe(response => {
      // console.log(response, 'Response app');
      if (response) {
        this.selectedProduct = response;
      }
    });
  }
}
