import { EventEmitter, Injectable } from '@angular/core';
import { LogIn, SignIn } from '../DataType';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {
 issellerLoggedIn = new BehaviorSubject(false);
 isSellerLogInError = new EventEmitter(false);

  constructor(private http:HttpClient, private route:Router) { }
  sellerSignIn(data:SignIn){
    this.http.post('http://localhost:3000/seller' , data, {observe:'response'}).subscribe((result)=>{
    if(result){
      localStorage.setItem('seller', JSON.stringify(result.body));
      this.route.navigate(['/seller-home']);
    }
    })
  }
  sellerReload(){
    if(localStorage.getItem('seller')){
      this.issellerLoggedIn.next(true);
      this.route.navigate(['/seller-home']);
    }
  }

  sellerLogin(data:LogIn){
    this.http.get(`http://localhost:3000/seller?email=${data.Email}&Password=${data.Password}`, 
    {observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.route.navigate(['/seller-home']);
        console.warn('user Login')
      }else{
        console.warn('login failed')
        this.isSellerLogInError.emit(true);
      }
        
    })
  }
}
