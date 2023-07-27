import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../DataType';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.scss']
})
export class SellerProductListComponent implements OnInit {
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
