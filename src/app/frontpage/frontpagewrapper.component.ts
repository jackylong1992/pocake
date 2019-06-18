import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  templateUrl: './frontpagewrapper.component.html',
  styleUrls: ['./frontpagewrapper.component.scss']
})
export class FrontPageWrapperComponent {
  private productList: [any];
  constructor(private router: Router) {

  }
  ngOnInit(): void {
      // console.log("frontpage init");
      this.productList = [
        {
          name: "Bông lan trứng muối"
        },
        // {
        //   name: "Khô gà lá chanh"
        // },
        // {
        //   name: "Chân trâu đường đen"
        // },
        // {
        //   name: "Heo khô xé tỏi"
        // }
      ];
  }

  // ngAfterContentInit() : void {
  //   console.log("after content init");
  // }

  // ngAfterViewInit() : void {
  //   console.log("after view init");
  // }

  ngOnDestroy(): void {
    // console.log("frontpage destroy");
  }
}
