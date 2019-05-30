import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { IArticle } from './article.model';
// import { ArticleModel } from './article.model';
@Component({
  templateUrl: './articlewrapper.component.html',
  styleUrls: ['./articlewrapper.component.scss']
})
export class ArticleWrapperComponent {
  model: IArticle;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
      
  }

  bindModel() {
    let fakeModel = {
      name: "long",
      age: 24
    }
    this.model = fakeModel;
  }
}
