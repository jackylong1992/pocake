import { Component, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { OnChanges, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
@Component({
  selector: 'product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent {
  @Input() productList: any;
  ngOnInit(): void {
    console.log("product-list init");
    // this.productList = [
    //   {
    //     name: "Bông lan trứng muối"
    //   },
    //   // {
    //   //   name: "Khô gà lá chanh"
    //   // },
    //   // {
    //   //   name: "Chân trâu đường đen"
    //   // },
    //   // {
    //   //   name: "Heo khô xé tỏi"
    //   // }
    // ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes = ', changes);
  }

  ngAfterContentInit() : void {
    console.log("product-list after content init");
  }

  ngAfterViewInit() : void {
    console.log("product-list after view init");
  }
}
