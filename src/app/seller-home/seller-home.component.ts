import { Component, OnInit } from '@angular/core';
import { Products } from '../DataType';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit {

  productList: undefined | Products[];
  ProductDeleteMessage:string | undefined;
    constructor(private sellerPrduct:ProductsService) { }
  
    ngOnInit(): void {
      this.List();
    }
  
    deleteProduct(id:number){
      this.sellerPrduct.sellerDeleteProduct(id).subscribe((result)=>{
        if(result){
          this.ProductDeleteMessage='Product is deleted'
          this.List();
        }setTimeout(() => {
          this.ProductDeleteMessage=undefined;
        }, 3000);
      })
    }
  
    List(){
      this.sellerPrduct.sellerProductList().subscribe((result)=>{
        if(result){
         this.productList=result;
        }
       });
    }
}
