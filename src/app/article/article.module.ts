import { NgModule } from '@angular/core';
import { HeroFormComponent } from './articlewrapper.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: 'article', 
        component: HeroFormComponent,
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
    HeroFormComponent,
  ],
  exports: [
    
  ]
})
export class ArticleModule { }
