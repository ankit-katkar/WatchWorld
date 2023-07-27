import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.scss']
})
export class SellerAddProductComponent implements OnInit {
addProductMessage: string | undefined;

  constructor(private Product:ProductsService) { }

  ngOnInit(): void {
  }
  AddProduct(data:any){
    this.Product.sellerAddProduct(data).subscribe((result)=>{
      if(result){
        this.addProductMessage='Product is successfully added'
      }setTimeout(()  => {
        this.addProductMessage=undefined    
      }, 3000);
    })

  }
}
