import { Component, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { OnChanges, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'product-item-component',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductItemComponent implements OnChanges {
  @Input() data: any;
  ngOnInit(): void {
    console.log("product-item component");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes = ', changes);
  }
}
