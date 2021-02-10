import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { PageListComponent } from './page-list/page-list.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:'list-products', component: PageListComponent},
  {path: '', component: ProductComponent},
  {path: 'details/:id', component: DetailsProductComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
