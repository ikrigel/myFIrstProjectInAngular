import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

// edit / update -< combines PUT and GET
export class EditProductComponent implements OnInit {

  public product: ProductModel = new ProductModel();
  private product_api: string = "http://localhost:3030/api/products/";
  public image_url: string;
  private product_id: number;
  public imageVisited: boolean = false;

  public formControl: FormGroup;
  public nameControl: FormControl;
  public priceControl: FormControl;
  public stockControl: FormControl;
  public imageControl: FormControl;


  constructor(private myActivatedRoute: ActivatedRoute ,private http: HttpClient, private router: Router) { 
    this.nameControl = new FormControl(null, [Validators.required, Validators.pattern("^[A-Z].*$")]);
    this.priceControl = new FormControl(null, Validators.required);
    this.stockControl = new FormControl(null, Validators.required);
    this.imageControl = new FormControl();
    this.formControl = new FormGroup({
      nameControl: this.nameControl,
      priceControl: this.priceControl,
      stockControl: this.stockControl,
      imageControl: this.imageControl
    })
  }

  async ngOnInit() {
    this.product_id = this.myActivatedRoute.snapshot.params.id;
    // from "product details", since it's the same
    try {

    // 1. Extract 'id' from URL
      // const product_id = this.myActivatedRoute.snapshot.params.id;

      // const on local scope - since this is an update
      const product = await this.http.get<ProductModel>(this.product_api + this.product_id).toPromise();
      this.nameControl.setValue(product.name);
      this.priceControl.setValue(product.price);
      this.stockControl.setValue(product.stock);
      this.image_url ="http://localhost:3030/api/products/images/"+product.imageName; 

    // 3. Assign retrieved product to the 'product' object in this class
    } catch(err) {
      console.log(err);
  }
  }

  saveImage(args: Event) {
    this.product.images = (args.target as HTMLInputElement).files;

  }

  loseFocus() {
    this.imageVisited = true;
  }

  async update() {
    // transfer control object values into "product" object values
    this.product.name = this.nameControl.value;
    this.product.price = this.priceControl.value;
    this.product.stock = this.stockControl.value;
    // this.product.images = this.imageControl.value;

    try {
    const myFormData = new FormData();
    debugger;
    myFormData.append("name", this.product.name);
    myFormData.append("price", this.product.price.toString());
    myFormData.append("stock", this.product.stock.toString());
    myFormData.append("image", this.product.images.item(0));    // "image" - according to POST api; product.images[0]

    const updatedProduct = await this.http.put<ProductModel>(this.product_api + this.product_id, myFormData).toPromise();

    // this.router.navigateByUrl("/products");
    this.router.navigateByUrl(`/products/${updatedProduct.id}`)
    } catch(err) {
      console.log(err)
    }
}

}