import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonetaryService {

  constructor() { }

  public getPrice(priceWithVAT: number) :number {
    
    return (priceWithVAT/1.17);

  }

  public getVat(priceWithoutVAT: number) :number {
    
    return (priceWithoutVAT-(priceWithoutVAT/1.17));

  }
}
