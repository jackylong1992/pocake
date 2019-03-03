import { Component, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { OnChanges, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'product-item-component',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export default class ProductItemComponent {
  ngOnInit(): void {
    console.log("product-item component");
  }
}
