import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  }

  collapseButtonClick () {
    this.isCollapsed = !this.isCollapsed;
  }
}
