import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[];
  public image_api:string="http://localhost:3030/api/products/images/";
  constructor(private http:HttpClient) { }

  async ngOnInit(){


    try{
      this.products=await this.http.get<ProductModel[]>("http://localhost:3030/api/products").toPromise();
    }catch(err){
      console.log(err);
    }
      
    
  }

}