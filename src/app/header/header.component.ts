import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Products } from '../DataType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
menuType:string = '';
sellerName:string='';
userName:string='';
cardCountItem=0;
scarchResult: undefined | Products[];
  constructor(private route:Router, private product: ProductsService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType="seller";
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName=sellerData.Fname
          }
        }else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore);
            this.userName=userData.Fname
          this.menuType="user";
          this.product.getCartList(userData.id);
        }  else{
          this.menuType="default";
        }
      }
    });
    let countItem = localStorage.getItem('localCart')
    if(countItem){
      this.cardCountItem=JSON.parse(countItem).length
    }

    this.product.cardItemData.subscribe((items)=>{
      this.cardCountItem=items.length
    })
  }

  Logout(){
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
  }
  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/user-auth'])
    this.product.cardItemData.emit([])
  }
  searchProduct(data:KeyboardEvent){
    const element = data.target as HTMLInputElement;
    this.product.scarchProduct(element.value).subscribe((result)=>{
      if(result.length>6){
        result.length=6
      }
      this.scarchResult=result;
    })
  }
  hideScarch(){
    this.scarchResult = undefined;
  }

  ScarchProduct(val:string){
    this.route.navigate([`searchPage/${val}`])
  }

}
