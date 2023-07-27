import { Injectable, EventEmitter } from '@angular/core';
import { LogIn, SignIn } from '../DataType';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  InvalidUser = new EventEmitter(false);

  constructor(private http:HttpClient, private route:Router) { }
  userSignUp(data:SignIn){
    this.http.post('http://localhost:3000/User', data, {observe:'response'}).subscribe((result)=>{
      if(result){
        localStorage.setItem('user', JSON.stringify(result.body));
        this.route.navigate(['/']);
      }
    })
  }
  userLogin(data:LogIn){
    this.http.get<SignIn[]>(`http://localhost:3000/User?email=${data.Email}&Password=${data.Password}`, 
    {observe:'response'}).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('user', JSON.stringify(result.body[0]));
        this.route.navigate(['/']);
        this.InvalidUser.emit(false)
        
      }else{
        this.InvalidUser.emit(true)
      }
    })
  }
  userAuth(){
    if(localStorage.getItem('user')){
      this.route.navigate(['/'])
    }
  }

  
}
