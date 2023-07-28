import { HttpClient, } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Cart, Orders, Products } from '../DataType';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  addProductMessage:string | undefined;
  cardItemData = new EventEmitter<Products[] | []>()

  constructor(private http:HttpClient) { }
  sellerAddProduct(data:Products){
   return this.http.post('http://localhost:3000/Products',data)
  }
  sellerProductList(){
    return this.http.get<Products[]>('http://localhost:3000/Products')
  }
  sellerDeleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/Products/${id}`)
  }
  getProduct(id:string){
    return this.http.get<Products>(`http://localhost:3000/Products/${id}`)
  }
  sellerUpdateProduct(Products:Products){
    return this.http.put(`http://localhost:3000/Products/${Products.id}`,Products)
  }
  trandeyProduct(){
    return this.http.get<Products[]>(`http://localhost:3000/Products?_limit=20`)
  }
  scarchProduct(query:string){
    return this.http.get<Products[]>(`http://localhost:3000/Products?q=${query}`)
  }
  localAddToCard(data:Products){
    let cartData=[];
    let localCart = localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]));
      this.cardItemData.emit([data]);
    }else{
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));  
      this.cardItemData.emit(cartData);    
    }
   
  }

  removeCartItem(productId:number){
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      let items:Products[] = JSON.parse(cartData);
      items = items.filter((item:Products)=>productId!==item.id)
      localStorage.setItem('localCart', JSON.stringify(items));   
      this.cardItemData.emit(items);
    }
  }

  addToCart(cartData:Cart){
    return this.http.post('http://localhost:3000/Cart',cartData)
  }
  getCartList(userId:number){
    return this.http.get<Products[]>('http://localhost:3000/Cart?userId='+userId, 
    {observe:'response'}).subscribe((result)=>{
      console.warn(result);   
      if(result && result.body){
        this.cardItemData.emit(result.body);
      }
    }); 
  }
  removeToCart(cartId:number){
    return this.http.delete('http://localhost:3000/Cart/'+cartId);
  }
  cartListData(){
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<Cart[]>('http://localhost:3000/Cart?userId='+userData.id )
  };
  orderNow(data:Orders){
    return this.http.post('http://localhost:3000/MyOrders',data)
  }
  orderList(){
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<Orders[]>('http://localhost:3000/MyOrders?userId='+userData.id)
  }
  deleteCartItem(cartId:number){
    return this.http.delete('http://localhost:3000/Cart/'+cartId,
    {observe:'response'}).subscribe((result)=>{
      if(result){
        this.cardItemData.emit([]);
      }
    })
  }
  CancelOrder(orderId:number){
    return this.http.delete('http://localhost:3000/MyOrders/'+orderId)
  }
}
