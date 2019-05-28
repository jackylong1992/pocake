import { NgModule } from '@angular/core';
import { ArticleWrapperComponent } from './articlewrapper.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: 'article', 
        component: ArticleWrapperComponent,
        children: [
        ]
       },
    ]),
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ArticleWrapperComponent,
  ],
  exports: [
    
  ]
})
export class ArticleModule { }
