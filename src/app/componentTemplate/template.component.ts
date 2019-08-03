import { Component } from '@angular/core';
import * as $ from 'jquery';
import { OnChanges, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'template-component',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  ngOnInit(): void {
    console.log("template component");
  }
}
