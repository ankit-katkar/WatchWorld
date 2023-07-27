import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Cart, Orders } from '../DataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
totalPrice:number|undefined;
cartData:Cart[]|undefined;
orderMessage:string|undefined;
  constructor(private product:ProductsService, private route:Router) { }

  ngOnInit(): void {
    this.product.cartListData().subscribe((result)=>{
      let price=0;
      this.cartData=result;
      result.forEach((item)=>{
        if(item.quantity){
          price = price+(+item.price* + item.quantity);
        }      
      });
      this.totalPrice=price+(price/10)+100-(price/10);;
      
    })
  }
  orderNow(data:Orders){
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if(this.totalPrice){
      let orderData:Orders={
        ...data,
        totalPrice:this.totalPrice,
        userId
      }
      this.cartData?.forEach((item)=>{
        setTimeout(() => {
         item.id && this.product.deleteCartItem(item.id);
        }, 700);
      })
      this.product.orderNow(orderData).subscribe((result)=>{
        if(result){
          this.orderMessage='Your order has been placed'
          setTimeout(() => {
            this.route.navigate(['myorders'])
            this.orderMessage=undefined;
          }, 4000);
        }
      })
    }
  }

}
