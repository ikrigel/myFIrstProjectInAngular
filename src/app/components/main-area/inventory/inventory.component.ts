import { Component, OnInit } from '@angular/core';
import { ArrayService } from 'src/app/services/array.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

 private product_prices: number[]=[49,99,33,55,876];
 total_prices: number = 0;
  
 
 
  constructor(private arrService: ArrayService, private colorService: ColorService) { }

  private color: string="";
 randColor: string="blue";
 cmpStyle: Object={};
 style2: Object= {};

  ngOnInit(): void {
    this.total_prices=this.arrService.getSum(this.product_prices);
    this.randColor=this.colorService.getColor();
    this.cmpStyle={backgroundColor:this.colorService.getColor(),
    color:"green",
    fontSize:"23px"
  };
  
  }
  
  
}
