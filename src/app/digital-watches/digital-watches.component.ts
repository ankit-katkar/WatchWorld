import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../DataType';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-digital-watches',
  templateUrl: './digital-watches.component.html',
  styleUrls: ['./digital-watches.component.scss']
})
export class DigitalWatchesComponent implements OnInit {

  Products:Products[] | undefined | any;
  constructor(private products:ProductsService) { }

  ngOnInit(): void {
    this.products.trandeyProduct().subscribe((data)=>{
      const result = from(data);
      result.pipe(
        filter(result => result.category === "Digital"),
        toArray(),
      ).subscribe((result)=>{
        console.warn(result);
        this.Products = result;
      })     
    })

    
  }
}
