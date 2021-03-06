import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  public product: ProductModel;
  public image_api: string = "http://localhost:3030/api/products/images/";
  private product_api: string = "http://localhost:3030/api/products/";
  
  public product_id=+this.myActivatedRouter.snapshot.params.id;

  constructor(private myProductService:ProductsService,private myActivatedRouter: ActivatedRoute,private http: HttpClient,private router: Router) { }

  async ngOnInit() {
try {
    //1.Extract 'id' from URL
    //const product_id=this.myActivatedRouter.snapshot.params.id;
    //2. Make REST API
    this.product= await this.myProductService.getOneProduct(this.product_id);
    //this.product=await this.http.get<ProductModel>(this.product_api + product_id).toPromise();
    //3. Asssign retrieved product to the 'product' object i this class
}catch(err){
  console.log(err);
}
  }
  async delete() {
    if(window.confirm('Are sure you want to delete this item ?')){
    try {
      // 1. Extract 'id' from URL
      const product_id = this.myActivatedRouter.snapshot.params.id;
      //delete request
      await this.myProductService.deleteProduct(this.product_id);
      //redirect to productlist
      this.router.navigateByUrl(`/products`);
      
    } catch(err) {
      console.log(err);
    }
  }
  }
}
