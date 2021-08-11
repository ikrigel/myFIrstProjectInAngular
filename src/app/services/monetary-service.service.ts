import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonetaryServiceService {

  constructor() { }

  getPrice(price:number):number{
    return price/1.17;
  }
  getVat(price:number):number{
    return price-price/1.17;
  }
}
