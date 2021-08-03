import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  name: string="Yoav";
  @Input()
  price: number =10;
  @Input()
  stock: number =10;
  @Input()
  image: string="hello"


  constructor() { }

  ngOnInit(): void {
  }

}
