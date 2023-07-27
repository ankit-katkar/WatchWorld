import { Component, OnInit } from '@angular/core';
import { Cart, LogIn, Products, SignIn } from '../DataType';
import { UserAuthService } from '../services/user-auth.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  constructor(private user:UserAuthService, private product:ProductsService) { }
 userAuthError:string='';
  ngOnInit(): void {
    this.user.userAuth();
  }
  
  showLogIn = false;
  isLoginError=" ";

  SignUp(data:SignIn){
    this.user.userSignUp(data);

  }
  LogIn(data:LogIn){
    this.user.userLogin(data);
    this.user.InvalidUser.subscribe((result)=>{
      if(result){
        this.userAuthError="Please enter valid user Details"
      }else{
        this.localCartTorRemoteCart();
      }
    })
  }

  isLogIn(){
    this.showLogIn=true;
  }
  isSignIn(){
    this.showLogIn=false;
  }

  localCartTorRemoteCart(){
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if(data){
      let cartDataList:Products[] = JSON.parse(data);
      cartDataList.forEach((product:Products, index) => {
        let cartData:Cart ={
          ...product,
          productId: product.id,
          userId
        };
        delete cartData.id;
        setTimeout(() => {
          this.product.addToCart(cartData).subscribe((result)=>{
            if(result){
              console.warn('item save in db');           
            }
          })
          if(cartDataList.length===index+1){
            localStorage.removeItem('localCart')
          }
        }, 500);
      });
    }

    setTimeout(() => {
      this.product.getCartList(userId);
    }, 2000);
  }

}
