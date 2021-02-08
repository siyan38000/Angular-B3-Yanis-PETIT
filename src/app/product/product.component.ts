import { Component, OnInit } from '@angular/core';
import { product } from '../Models/products';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productServ: ProductService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public selectedProduct: product;
  public isEditing = false;

  onSelectionChanged(data:product){
    setTimeout(() => {
      this.selectedProduct = data;
    },0);


  }
  title = 'businessUnit';
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

}
