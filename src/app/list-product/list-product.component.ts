import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { product } from '../Models/products';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductService } from '../product-service.service'

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{

  @Output() selectionChanged = new EventEmitter<product>();
  @Input() canChangeSelection=true;

  constructor(private productServ : ProductService) { }
  public selectedProduct: product =  new product;
  public isEditing=false;
  productList$: Observable<product[]>;
  isReady = false;


ngOnInit(): void{
  this.productList$ = this.productServ.getAllProducts()
    .pipe(
      tap((data)=>{
        this.isReady = true;
        if (data.length)
        this.selectProduct(data[0])
        console.log(this.selectedProduct);
        console.log(' |');
        console.log(data[0])
      }));
}

  onSelectionChanged(p: product){
    setTimeout(() => {
      this.selectedProduct = p;
    },0);
  }

  onUpdate(){
    this.isEditing = true;
  }

  onAdd(){
    this.selectedProduct = new product();
    this.isEditing = true;
  }

  formDone(){
    this.isEditing=false;
    this.onSelectionChanged(this.productServ.selectedProduct);
  }

  onSelectionChange(p:product){
    if (this.canChangeSelection)
    {
      this.selectProduct(p);
    }
  }

  public selectProduct(p: product) {
    this.productServ.selectProduct(p);
    this.selectionChanged.emit(p);
  }

  isSelected(p: product){
    return  p == this.productServ.selectedProduct;
  }
}
