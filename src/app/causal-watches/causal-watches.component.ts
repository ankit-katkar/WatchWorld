import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../DataType';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-causal-watches',
  templateUrl: './causal-watches.component.html',
  styleUrls: ['./causal-watches.component.scss']
})
export class CausalWatchesComponent implements OnInit {

  Products:Products[] | undefined | any;
  constructor(private products:ProductsService) { }

  ngOnInit(): void {
    this.products.trandeyProduct().subscribe((data)=>{
      const result = from(data);
      result.pipe(
        filter(result => result.category === "Causal"),
        toArray(),
      ).subscribe((result)=>{
        console.warn(result);
        this.Products = result;
      })     
    })

    
  }
}
