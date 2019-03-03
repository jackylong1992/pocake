import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import {NavBarService} from '../frontpage/nav-bar.service';
import { DataService } from '../frontpage/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {
  constructor(private navbarService: NavBarService, private dataService: DataService, private router: Router) {
  }
  ngOnInit(): void {
  
  }
}
