import { NgModule } from '@angular/core';
import { FrontPageWrapperComponent } from './frontpagewrapper.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    FrontPageWrapperComponent
  ],
  exports: [
    
  ]
})
export class FrontPageModule { }
