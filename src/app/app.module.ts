import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProductComponent } from './list-product/list-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductComponent } from './product/product.component';
import { PageListComponent } from './page-list/page-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    DetailsProductComponent,
    FormProductComponent,
    ProductComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
