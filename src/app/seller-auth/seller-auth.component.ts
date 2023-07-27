import { Component, OnInit } from '@angular/core';
import { LogIn, SignIn } from '../DataType';
import { SellerAuthService } from '../services/seller-auth.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerAuthService) { }

  showLogIn = false;
  isLoginError=" ";
  ngOnInit(): void {
    this.seller.sellerReload();
  }
  SignUp(data:SignIn){
    this.seller.sellerSignIn(data);
  }
  LogIn(data:LogIn){
    this.seller.sellerLogin(data);
    this.seller.isSellerLogInError.subscribe((Error)=>{
      this.isLoginError="Email And Password is incorrect";
    })
  }

  isLogIn(){
    this.showLogIn=true;
  }
  isSignIn(){
    this.showLogIn=false;
  }
}
