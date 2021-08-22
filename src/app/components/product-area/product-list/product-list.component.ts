import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ProductModel from 'src/app/models/product.model';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: ProductModel[];
  public image_api: string = "http://localhost:3030/api/products/images/";

  constructor(private myProductsService: ProductsService, private notify: NotifyService, private http:HttpClient) { }

  async ngOnInit() {
    try {
      //const products = await this.http.get<ProductModel[]>("http://localhost:3030/api/product").toPromise();
      //console.log(products);
      this.products = (await this.myProductsService.getAllProducts()).reverse();
      //this.products = this.products.reverse();
    } catch(err) {
      console.log(err);
    }
  }

}
