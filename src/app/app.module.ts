import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { MainComponent } from './components/main-area/main/main.component';
import { YoutubeVideoComponent } from './components/main-area/youtube-video/youtube-video.component';
import { DiscountComponent } from './components/main-area/discount/discount.component';
import { SpecialsComponent } from './components/main-area/specials/specials.component';
import { DessertsComponent } from './components/main-area/desserts/desserts.component';
import { SalesComponent } from './components/main-area/sales/sales.component';
import { SloganComponent } from './components/main-area/slogan/slogan.component';
import { RecommendedComponent } from './components/main-area/recommended/recommended.component';
import { SearchComponent } from './components/main-area/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PricingComponent } from './components/main-area/pricing/pricing.component';
import { ClockComponent } from './components/main-area/clock/clock.component';
import { InventoryComponent } from './components/main-area/inventory/inventory.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from './components/product-area/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-area/product-details/product-details.component';
import { NewProductComponent } from './components/product-area/new-product/new-product.component';
import { EditProductComponent } from './components/product-area/edit-product/edit-product.component';
import { EmployeeListComponent } from './components/employee-area/employee-list/employee-list.component';
import { NewEmployeeComponent } from './components/employee-area/new-employee/new-employee.component';
import { EmployeeDetailsComponent } from './components/employee-area/employee-details/employee-details.component';
import { EditEmployeeComponent } from './components/employee-area/edit-employee/edit-employee.component';
import { VatCalculatorComponent } from './components/main-area/components/main-area/vat-calculator/vat-calculator.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './components/admin-area/admin/admin.component';
import { AuthMenuComponent } from './components/auth-area/auth-menu/auth-menu.component';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { ObservableTesterComponent } from './components/about-area/observable-tester/observable-tester.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { Page404Component } from './components/layout-area/page404/page404.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    YoutubeVideoComponent,
    DiscountComponent,
    SpecialsComponent,
    DessertsComponent,
    SalesComponent,
    SloganComponent,
    RecommendedComponent,
    SearchComponent,
    PricingComponent,
    ClockComponent,
    InventoryComponent,
    ProductListComponent,
    ProductDetailsComponent,
    NewProductComponent,
    EditProductComponent,
    EmployeeListComponent,
    NewEmployeeComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    VatCalculatorComponent,
    AdminComponent,
    AuthMenuComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ContactUsComponent,
    ObservableTesterComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
