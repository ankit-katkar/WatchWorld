import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Cart, priceSummary } from '../DataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartData:Cart[]|undefined;
priceSummary:priceSummary={
  price:0,
  tax:0,
  discount:0,
  deliveryCharges:0,
  total:0
}
  constructor( private product:ProductsService, private route:Router) { }

  ngOnInit(): void {
    this.loadCartDetail();
  }
  checkout(){
    this.route.navigate(['checkout'])
  }
  removeToCart(cartId:number | undefined){
    cartId && this.cartData && this.product.removeToCart(cartId)
    .subscribe((result)=>{
      this.loadCartDetail();   
     }) 
  }
  loadCartDetail(){
    this.product.cartListData().subscribe((result)=>{
      this.cartData=result;
      let price=0;
      result.forEach((item)=>{
        if(item.quantity){
          price = price+(+item.price* + item.quantity);
        }      
      });
      this.priceSummary.price=price;
      this.priceSummary.discount=price/10;
      this.priceSummary.tax=price/10;
      this.priceSummary.deliveryCharges=50;
      this.priceSummary.total=price+(price/10)+100-(price/10);
      if(!this.cartData.length){
        this.route.navigate(['/'])
      }
    })
  }
}
