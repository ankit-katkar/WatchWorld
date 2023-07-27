import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../DataType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
trandeyProducts:undefined | Products[];

  constructor(private products:ProductsService) { }

  ngOnInit(): void {
    this.products.trandeyProduct().subscribe((data)=>{
      this.trandeyProducts=data;
    })
  }

}
