import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule ,Validators } from '@angular/forms';
import { product } from '../Models/products';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  @Output() done = new EventEmitter();
  private _product: product = new product;
@Input() set product(value:product){
  this._product = value;
  this.productForm.setValue(this.product);
}
get product(){
  return this._product;
}
  constructor(private fb : FormBuilder, private productServ : ProductService) { }
productForm = this.fb.group({
  id:[''],
  name:['', [Validators.required]],
  texture: ['', [Validators.required]],
  grammage: ['', [Validators.required]],
  couleur: ['', [Validators.required]]
})
  ngOnInit(): void {
    
  }
  onCancel(){
    this.done.emit();
  }
  submit(): void {
      this.product =  new product(this.productForm.value);
      this.productServ.Updateproduct(this.product);
      this.productServ.selectProduct(this.product);
      debugger
      this.done.emit();
  }
}
