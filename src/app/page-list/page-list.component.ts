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

  ngOnInit(): void {
    this.productList$ = this.productServ.getAllProducts()
    .pipe();
  }

}
