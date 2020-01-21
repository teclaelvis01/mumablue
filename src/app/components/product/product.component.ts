import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { faStar, faStarHalf, faStarOfDavid, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  faStar = faStar;
  faStarOfDavid = faStarOfDavid;
  faStarOfLife = faStarOfLife;
  constructor() { }

  ngOnInit() {
    this.product.variations.forEach((v, i) => {
      if (i === 0) {
        this.product.photoUrl = v.variationImage.url;
        return;
      }

    });
  }
  activeMe(el) {
    $(el).toggleClass('active');
  }

  createRange(nnumber: number) {
    const items: number[] = [];
    for (let i = 1; i <= nnumber; i++) {
      items.push(i);
    }
    return items;
  }

}
