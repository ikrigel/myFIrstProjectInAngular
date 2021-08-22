import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import CategorieModel from '../models/categorie.model';
import { categoriesDownloadedAction } from '../redux/categories-state';
import store from '../redux/store';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public async getAllCategories() {
    // console.log(store.getState().employeesState.employees);
    // if(store.getState().categoriesState.categories.length===0){
    //   const categoriesAPI = 
    // }
       if (store.getState().categoriesState.categories.length===0) {
           const categorie = await this.http.get<CategorieModel[]>(environment.categoriesUrl).toPromise();
           store.dispatch(categoriesDownloadedAction(categorie));
       }
       return store.getState().categoriesState.categories;
   }

  //  // Get one categorie: 
  //  public async getOneCategorie(id: number) {
  //      if (store.getState().employeesState.employees.length === 0) {
  //          const categorie = await this.http.get<CategorieModel[]>(environment.categoriesUrl).toPromise();
  //          store.dispatch(categoriesDownloadedAction(categorie));
  //      }
  //      const categorie = store.getState().categorieState.categorie.find(c => c.id === id);
  //      return categorie;
  //  }

  // //  // Add categorie: 
  //  public async addCategorie(Categorie: CategorieModel) {
  //      const myFormData: FormData = CategorieModel.convertToFormData(Categorie);
  //      const addedEmployee = await this.http.post<CategorieModel>(environment.categoriesUrl, myFormData).toPromise();
  //      store.dispatch(categorieAddedAction(addedCategorie));
  //      return addedEmployee;
  //  }

  //  // Update employee: 
  //  public async updateEmployee(employee: EmployeeModel) {
  //      const myFormData: FormData = EmployeeModel.convertToFormData(employee);
  //      const updatedEmployee = await this.http.put<EmployeeModel>(environment.employeesUrl + employee.id, myFormData).toPromise();
  //      store.dispatch(employeeUpdatedAction(updatedEmployee));
  //      return updatedEmployee;
  //  }

  //  // Delete employee: 
  //  public async deleteEmployee(id: number) {
  //      await this.http.delete(environment.employeesUrl + id).toPromise();
  //      store.dispatch(employeeDeletedAction(id));
  //  }

}
