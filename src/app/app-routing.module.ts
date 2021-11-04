import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductUpdateComponent } from './form-product-update/form-product-update.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';

const routes: Routes = [
  {path:'', component:ProductDashboardComponent},
  {path:'shopping-card', component:ShoppingCardComponent},
  {path:'form-product', component:FormProductComponent},
  {path:'form-product-update/:id', component:FormProductUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
