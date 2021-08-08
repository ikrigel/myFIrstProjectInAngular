import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public product:ProductModel=new ProductModel();
  private product_api: string = "http://localhost:3030/api/products";
  public imageVisited: boolean=false;


  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  saveImage(args: Event){
    this.product.images=(args.target as HTMLInputElement).files;
  }

  loseFocus(){
    this.imageVisited=true;
  }
  async submit(){
    try{
    //1. Conver 'product' object to FormData object (to be able to make a POST call)
    const myFormData=new FormData();
    debugger;
    myFormData.append("name",this.product.name);
    myFormData.append("price",this.product.price.toString());
    myFormData.append("stock",this.product.stock.toString());
    myFormData.append("image",this.product.images.item(0));//product.images[0]
    //2. Make POST with FormDat and check new product was created in the API
    const addedProduct=await this.http.post<ProductModel>(this.product_api,myFormData).toPromise();
    
    console.log('x');
    //3. Redirect to '/products' page or the product details of the new product (products/:id)
    //this.router.navigateByUrl("/products");
    this.router.navigateByUrl(`/products/${addedProduct.id}`);
  }catch(err){
    console.log(err);
  }
  }
}
