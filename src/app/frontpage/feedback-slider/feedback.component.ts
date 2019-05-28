import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
// import * as $ from 'jquery';
import { OnChanges, Input, EventEmitter, Output } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'feedback-component',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FeedbackComponent {
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
    $('.slider').bxSlider();
    
  }
  // ngAfterViewInit () {
  //   // setTimeout(()=> {
  //   //   (<any>$('.slider')).bxSlider();
  //   // }, 1000);
  //   function initSlider() {
  //     if ($('.slider').bxSlider) {
  //       (<any>$('.slider')).bxSlider();
  //     } else {
  //       setTimeout(()=> {
  //         initSlider();
  //       }, 500)
  //     }
  //   }
  //   initSlider();
  // }
}
