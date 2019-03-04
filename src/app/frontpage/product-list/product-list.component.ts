import { Component, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { OnChanges, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent {
  productList: any;
  ngOnInit(): void {
    console.log("product-list component");
    this.productList = [
      {
        name: "Bông lan trứng muối"
      },
      {
        name: "Khô gà lá chanh"
      },
      {
        name: "Chân trâu đường đen"
      },
      {
        name: "Heo khô xé tỏi"
      }
    ];
  }
}
