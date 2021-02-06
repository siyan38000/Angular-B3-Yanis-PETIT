import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListProductComponent } from './list-product/list-product.component';
import { map, shareReplay } from 'rxjs/operators';
import { product } from "../app/Models/products"
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: product[] = [];
  /*private productList : product[] = [
    {
      id: 1,
      name: "Produit1",
      grammage : "30",
      texture: "Métal",
      couleur: "Bleu"
    },
    {
      id: 2,
      name: "Produit2",
      grammage : "35",
      texture: "Acier",
      couleur: "Rouge"
    },
    {
      id: 3,
      name: "Produit3",
      grammage : "100",
      texture: "Plastique",
      couleur: "Rose"
    },
    {
      id: 4,
      name: "Produit4",
      grammage : "33",
      texture: "Alu",
      couleur: "Cyan"
    }
  ]*/
  public selectedProduct: product = new product;

  constructor(private http: HttpClient) {
    if (this.productList && this.productList.length){
      this.selectedProduct = this.productList[0]
    }
   }


   private getAllProduct$ = this.http.get<product[]>('assets/products.json').pipe(
    map((data : product[])=>{
      // création d'un autre tableau
      const result: product[] = [];
      data.forEach(element => {
        result.push(new product(element));
      });
      this.productList = result;
      //return result;
      // autre méthode (plus élégante mais attention à la confusion avec map (rxjs) et map (sur les tableaux))
      //  => équivalent du .Select en c# avec Linq => cette fonction map s'applique sur les tableaux
      return data.map(e=>new product(e));
    }),
    shareReplay(1),
    map((d)=> this.productList)
  );


  getAllProducts(){
    return this.getAllProduct$;
  }
  /*public getById(id : number){
    return this.getAllProduct$.pipe(
      // faire le job pour retourner uniquement le bon joueur
      // à vous d'inventer le code pour la question 5 !
      map((d)=>d.find(id))

    )
  }*/

  selectProduct(p: product){
    this.selectedProduct = p;
  }


  Updateproduct(product: product) {
    if (product.id==0){
      product.id=Math.max(0, ...this.productList.map(pl=>pl.id))+1;
      this.productList.push(product);
    }else{
      const productIndex = this.productList.findIndex(pl=>pl.id == product.id);
      this.productList[productIndex]=product;
    }
  }
}

