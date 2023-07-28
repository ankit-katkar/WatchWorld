import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAuthGuard } from './Guards/seller-auth.guard';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'seller-auth', component:SellerAuthComponent},
  {path:'seller-home', component:SellerHomeComponent, canActivate:[SellerAuthGuard]},
  {path:'selleraddproduct', component:SellerAddProductComponent, canActivate:[SellerAuthGuard]},
  {path:'sellerUdpadeProduct/:id', component:SellerUpdateProductComponent, canActivate:[SellerAuthGuard]},
  {path:'searchPage/:info', component:SearchpageComponent},
  {path:'detailProduct/:productId', component:ProductDetailsComponent},
  {path:'user-auth', component:UserAuthComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:CheckoutPageComponent},
  {path:'myorders', component:MyOrdersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
