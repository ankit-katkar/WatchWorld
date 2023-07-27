import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Products } from '../DataType';


@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent implements OnInit {

  constructor(private route:ActivatedRoute, private products:ProductsService) { }
  productData: undefined | Products;
  updateProductMessage:string | undefined;
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    productId && this.products.getProduct(productId).subscribe((data)=>{
      this.productData=data;
    })
  }

  UpdateProduct(data:any){
    this.products.sellerUpdateProduct(data).subscribe((result)=>{
      this.updateProductMessage = 'Product has Updated'
    })
    setTimeout(() => {
      this.updateProductMessage=undefined;
    }, 3000);
  }
  
}
