import { Component, OnInit } from '@angular/core';
import { MonetaryService } from 'src/app/services/monetary.service';


@Component({
  selector: 'app-vat-calculator',
  templateUrl: './vat-calculator.component.html',
  styleUrls: ['./vat-calculator.component.css']
})
export class VatCalculatorComponent implements OnInit {
  public price: number=0;
  public priceWOVat: number
  public vat:number;
  constructor(public moService:MonetaryService) { }

  ngOnInit(): void {
    this.priceWOVat=this.moService.getPrice(this.price);
    this.vat=this.moService.getVat(this.price);
  }

}
