import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { DiscountComponent } from './components/home-area/discount/discount.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { LogoComponent } from './components/layout-area/logo/logo.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { MainComponent } from './components/main-area/main/main.component';
import { YoutubeVideoComponent } from './components/main-area/youtube-video/youtube-video.component';
import { SpecialsComponent } from './components/main-area/specials/specials.component';
import { DessertsComponent } from './components/main-area/desserts/desserts.component';
import { SalesComponent } from './components/main-area/sales/sales.component';
import { SloganComponent } from './components/main-area/slogan/slogan.component';
import { RecommendedComponent } from './components/main-area/recommended/recommended.component';
import { SearchComponent } from './components/main-area/search/search.component';
import { FormsModule } from '@angular/forms';
import { PricingComponent } from './components/main-area/pricing/pricing.component';
import { ClockComponent } from './components/main-area/clock/clock.component';
import { InventoryComponent } from './components/main-area/inventory/inventory.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductListComponent } from './components/product-area/product-list/product-list.component';
import { ProductComponent } from './components/product-area/product/product.component';
import { VatCalculatorComponent } from './components/main-area/vat-calculator/vat-calculator.component';


@NgModule({
  declarations: [
 
    LayoutComponent,
    DiscountComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    MenuComponent,
    MainComponent,
    YoutubeVideoComponent,
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
    ProductComponent,
    VatCalculatorComponent,
 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
