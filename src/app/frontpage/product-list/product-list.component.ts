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
  ngOnInit(): void {
    console.log("product-list component");
  }
}
