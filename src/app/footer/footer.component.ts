import { Component } from '@angular/core';
import * as $ from 'jquery';
import { OnChanges, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  ngOnInit(): void {
    console.log("template component");
  }
}
