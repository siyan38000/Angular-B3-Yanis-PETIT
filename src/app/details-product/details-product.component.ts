import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { product } from '../Models/products';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {


  @Input()
  public selectedProduct!: product;
  constructor() { }
  ngOnInit(): void{
}
}
