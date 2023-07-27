import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Cart, Products } from '../DataType';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
productData: Products | undefined;
removeCart=false
productQuentity:number=1;
cartData:Products | undefined;
  constructor(private ActiveRoute:ActivatedRoute, private product:ProductsService) { }

  ngOnInit(): void {
    let ProductDetail = this.ActiveRoute.snapshot.paramMap.get('productId');
    ProductDetail && this.product.getProduct(ProductDetail).subscribe((result)=>{
    this.productData=result;
    let cardData = localStorage.getItem('localCart');
    if(ProductDetail && cardData){
      let items = JSON.parse(cardData);
      items = items.filter((item:Products)=>ProductDetail==item.id.toString())
      if(items.length){
        this.removeCart=true;
      }else{
        this.removeCart=false;
      }
    }
    let user = localStorage.getItem('user')
    if(user){
      let userId = user && JSON.parse(user).id;
      this.product.getCartList(userId); 
      this.product.cardItemData.subscribe((result)=>{
      let item = result.filter((item:Products)=>ProductDetail?.toString()===item.productId?.toString())
      if(item.length){
        this.cartData=item[0];
        this.removeCart=true;
      }
      })
    }

    })

   
  }
  Quentity(val:string){
    if(this.productQuentity<20 && val==='max'){
      this.productQuentity+=1
    }else if(this.productQuentity>1 && val==='min'){
      this.productQuentity-=1
    }
  }
  AddToCart(){
    if(this.productData){
      this.productData.quantity = this.productQuentity;
      if(!localStorage.getItem('user')){
        this.product.localAddToCard(this.productData)
        this.removeCart=true;
      }else{
        let user = localStorage.getItem('user')
        let userId = user && JSON.parse(user).id
        let cartData:Cart={
          ...this.productData,
          userId,
          productId:this.productData.id
        }
        delete cartData.id;
        this.product.addToCart(cartData).subscribe((result)=>{
          if(result){
           this.product.getCartList(userId); 
           this.removeCart=true;
          }
        })
        
      }
    }
  }
  removeToCart(productId:number){
    if(!localStorage.getItem('user')){
    this.product.removeCartItem(productId)
    this.removeCart=false;
    }else{
     this.cartData && this.product.removeToCart(this.cartData.id).subscribe((result)=>{
      let user = localStorage.getItem('user')
      let userId = user && JSON.parse(user).id
        this.product.getCartList(userId);
        this.removeCart=false;      
     })      
    }
  }

  
}
