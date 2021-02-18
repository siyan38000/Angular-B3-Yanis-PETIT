import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../Models/products';
import { ProductService } from '../product-service.service'


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  productList$: Observable<product[]>;

  constructor(private productServ : ProductService) { }
  public selectedProduct: product =  new product;
  public isEditing=false;

  ngOnInit(): void {
    this.productList$ = this.productServ.getAllProducts()
    .pipe();
  }
  onAdd(){
    this.selectedProduct = new product();
    this.isEditing = true;
  }
  onSelectionChanged(data:product){
    setTimeout(() => {
      this.selectedProduct = data;
    },0);
  }
  formDone(){
    this.isEditing=false;
    this.onSelectionChanged(this.productServ.selectedProduct);
  }

}
