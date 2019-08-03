import { NgModule } from '@angular/core';
import { FrontPageWrapperComponent } from './frontpagewrapper.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {FeedbackComponent} from './feedback-slider/feedback.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: 'frontpage', 
        component: FrontPageWrapperComponent,
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
    FrontPageWrapperComponent,
    ProductListComponent,
    ProductItemComponent,
    FeedbackComponent
  ],
  exports: [
    
  ]
})
export class FrontPageModule { }
