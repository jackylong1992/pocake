import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import MapComponent from './map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: 'map', 
        component: MapComponent,
        children: [
        ]
       },
    ]),
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBEKfUFfetsQnwGvqOhiKt9sfK9oZASmBg'
    })
  ],
  declarations: [
    MapComponent
  ],
  exports: [
    
  ]
})
export class MapPageModule { }
