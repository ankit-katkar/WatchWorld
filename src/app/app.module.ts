import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LuxuryWatchesComponent } from './luxury-watches/luxury-watches.component';
import { CausalWatchesComponent } from './causal-watches/causal-watches.component';
import { SmartWatchesComponent } from './smart-watches/smart-watches.component';
import { DigitalWatchesComponent } from './digital-watches/digital-watches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    HomeComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    SearchpageComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    CartComponent,
    CheckoutPageComponent,
    MyOrdersComponent,
    FooterComponent,
    LuxuryWatchesComponent,
    CausalWatchesComponent,
    SmartWatchesComponent,
    DigitalWatchesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
