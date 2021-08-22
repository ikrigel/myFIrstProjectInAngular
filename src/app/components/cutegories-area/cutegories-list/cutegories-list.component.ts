import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotifyService } from 'src/app/services/notify.service';
import store from 'src/app/redux/store';
import CategoriesModel from 'src/app/models/categorie.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-cutegories-list',
  templateUrl: './cutegories-list.component.html',
  styleUrls: ['./cutegories-list.component.css']
})
export class CutegoriesListComponent implements OnInit {
 public categorie: CategoriesModel[];
  
  //public products: ProductModel[];
  public image_api: string = "http://localhost:3030/api/categories/images/";

  constructor(private myCategorieService:CategoriesService, private notify: NotifyService, private http:HttpClient) { }

  async ngOnInit(): Promise<void> {
    try {
      console.log("Line 20");
      console.log(store.getState().authState.user.token);
      const categorie = await this.http.get<CategoriesModel[]>("http://localhost:3030/api/categories").toPromise();
      this.categorie = (await this.myCategorieService.getAllCategories()).reverse();
     
    } catch(err) {
      console.log(err);
    }
  }

}
