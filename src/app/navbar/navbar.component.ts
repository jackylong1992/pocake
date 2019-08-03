import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {
  isCollapsed: boolean
  constructor( private router: Router) {
  }
  ngOnInit(): void {
    this.isCollapsed = false;

    if (this.is_touch_device) {
      $(".nav .has-sub-menu").click((event)=> {
        $(event.target).closest(".has-sub-menu").find("ul").toggle();
      })
    }
  }

  is_touch_device() {
    return 'ontouchstart' in window        // works on most browsers 
        || 'onmsgesturechange' in window;  // works on IE10 with some false positives
  };

  collapseButtonClick () {
    this.isCollapsed = !this.isCollapsed;
  }
}
