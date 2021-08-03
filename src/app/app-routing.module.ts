import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './components/main-area/inventory/inventory.component';
import { MainComponent } from './components/main-area/main/main.component';
import { SearchComponent } from './components/main-area/search/search.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';

const routes: Routes = [
  {path:"main",component:MainComponent},
  {path:"inventory", component:InventoryComponent},
  {path: "search", component:SearchComponent},
  {path:"products",component:ProductListComponent},
  { path: "", redirectTo: "/main", pathMatch: "full" } // pathMath: "full" --> exact
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
