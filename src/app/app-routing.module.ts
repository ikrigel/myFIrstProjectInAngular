import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-area/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-area/employee-list/employee-list.component';
import { NewEmployeeComponent } from './components/employee-area/new-employee/new-employee.component';
import { InventoryComponent } from './components/main-area/inventory/inventory.component';
import { MainComponent } from './components/main-area/main/main.component';
import { SearchComponent } from './components/main-area/search/search.component';
import { NewProductComponent } from './components/product-area/new-product/new-product.component';
import { ProductDetailsComponent } from './components/product-area/product-details/product-details.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "inventory", component: InventoryComponent },
  { path: "search", component: SearchComponent },
  { path: "products/new", component: NewProductComponent},
  { path: "products/:id", component: ProductDetailsComponent},
  { path: "products", component: ProductListComponent },
  { path: "employees/new", component: NewEmployeeComponent},
  { path: "employees/:id", component: EmployeeDetailsComponent},
  { path: "employees", component: EmployeeListComponent },
  { path: "main", redirectTo: "", pathMatch: "full" } // pathMath: "full" --> exact
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
