import { Component, OnInit } from '@angular/core';
import { MonetaryServiceService } from 'src/app/services/monetary-service.service';

@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css']
})
export class VatCalculatorComponent implements OnInit {
public price:number=0;
public priceWOVat:number;
public vat:number;

  constructor(public monetaryService:MonetaryServiceService) { }

  ngOnInit(): void {
    this.priceWOVat=this.monetaryService.getPrice(this.price);
    this.vat=this.monetaryService.getVat(this.price);
  }

}
