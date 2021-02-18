import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { ProductComponent } from './product/product.component';
import { PageDetailsComponent } from './page-details/page-details.component';


const routes: Routes = [
  {path:'list-products', component: PageListComponent},
  {path: '', component: ProductComponent},
  {path: 'details/:id', component: PageDetailsComponent},
  {path: 'details', component: PageDetailsComponent}
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
