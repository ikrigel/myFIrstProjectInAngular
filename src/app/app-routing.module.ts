import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { AdminComponent } from './components/admin-area/admin/admin.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { EditEmployeeComponent } from './components/employee-area/edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './components/employee-area/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-area/employee-list/employee-list.component';
import { NewEmployeeComponent } from './components/employee-area/new-employee/new-employee.component';
import { InventoryComponent } from './components/main-area/inventory/inventory.component';
import { MainComponent } from './components/main-area/main/main.component';
import { SearchComponent } from './components/main-area/search/search.component';
import { EditProductComponent } from './components/product-area/edit-product/edit-product.component';
import { NewProductComponent } from './components/product-area/new-product/new-product.component';
import { ProductDetailsComponent } from './components/product-area/product-details/product-details.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';
import { AdminGuard } from './services/admin.guard';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "inventory", component: InventoryComponent },
  { path: "search", component: SearchComponent },
  { path: "products/new", component: NewProductComponent},
  { path: "products/:id", component: ProductDetailsComponent},
  { path: "products/:id/edit", component: EditProductComponent},
  { path: "products", component: ProductListComponent },
  { path: "employees/new", component: NewEmployeeComponent},
  { path: "employees/:id", component: EmployeeDetailsComponent},
  { path: "employees/:id/edit", component: EditEmployeeComponent},
  { path: "employees", canActivate: [AdminGuard], component: EmployeeListComponent },
  { path: "about", component: AboutComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "admin", canActivate: [AdminGuard], component: AdminComponent },
  { path: "main", redirectTo: "", pathMatch: "full" } // pathMath: "full" --> exact
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
