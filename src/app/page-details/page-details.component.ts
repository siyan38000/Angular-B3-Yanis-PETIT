import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../Models/products';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent implements OnInit {
  @Input() public selectedProduct: product;

  constructor(private _router:Router, private _r: ActivatedRoute, private productServ : ProductService) { }

  strIdProduct = ""
  idProduct = 0;
  ngOnInit(): void {
    this._r.paramMap.subscribe((v)=>{
      this.strIdProduct= v.get('id');
      this.idProduct = +this.strIdProduct;
      this.productServ.getById(this.idProduct).subscribe({
        next: result => this.selectedProduct = result[0]
      });
    });


  }

  onSubmit(){
    this._router.navigateByUrl('/');
  }
}
