import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductService } from './shared/product.service';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { FormProductComponent } from './form-product/form-product.component';
import { FormProductUpdateComponent } from './form-product-update/form-product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ShoppingCardComponent,
    FormProductComponent,
    FormProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
