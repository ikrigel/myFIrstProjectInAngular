import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import productModel from 'src/app/models/product.model';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

//edit / Update => Combines GET and POST
export class EditProductComponent implements OnInit {
  private product:productModel=new ProductModel();
  private product_api: string = "http://localhost:3030/api/products/";

public formControl:FormGroup;
public nameControl:FormControl;
public priceControl:FormControl;
public stockControl:FormControl;
public imageControl:FormControl;

  constructor(private http: HttpClient, private myRoute:ActivatedRoute) {
    this.nameControl=new FormControl(null,[Validators.required,Validators.pattern("^[A-Z].*$")]);
   }

  async ngOnInit() {
    try {
      //1.Extract 'id' from URL
      const product_id=this.myRoute.snapshot.params.id;//Two way binding - the data will appear on the screen emidiatly.
      //2. Make REST PIA
  this.product=await this.http.get<ProductModel>(this.product_api + product_id).toPromise();
      //3. Asssign retrieved product to the 'product' object i this class
  }catch(err){
    console.log(err);
  }
    }

}
