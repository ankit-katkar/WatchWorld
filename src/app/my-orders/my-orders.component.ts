import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Orders } from '../DataType';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
orderData:Orders[]| undefined;
  constructor(private product:ProductsService) { }

  ngOnInit(): void {
   this.getOrderList();
  }
CancelOrder(orderId:number|undefined){
  orderId && this.product.CancelOrder(orderId).subscribe((result)=>{
    this.getOrderList();
  })
}
getOrderList(){
  this.product.orderList().subscribe((result)=>{
    this.orderData=result;
  })
}
}
