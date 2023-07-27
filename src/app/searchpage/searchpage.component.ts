import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Products } from '../DataType';
import { query } from '@angular/animations';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.scss']
})
export class SearchpageComponent implements OnInit {
 searchResult: undefined | Products[];
  constructor(private activeRoute:ActivatedRoute, private product:ProductsService) { }

  ngOnInit(): void {
    let info = this.activeRoute.snapshot.paramMap.get('info')
    info && this.product.scarchProduct(info).subscribe((result)=>{
      this.searchResult = result;
    })
  }

}
