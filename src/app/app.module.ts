import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MaterialModule} from './material.module'

import { AppComponent } from './app.component';
import { NavBarComponent} from './navbar/navbar.component';
import { FooterComponent} from './footer/footer.component';


import { FrontPageModule } from './frontpage/frontpage.module';
import { ArticleModule } from './article/article.module';
import { MapPageModule } from './map/map.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TemplateComponent} from './componentTemplate/template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'frontpage', pathMatch: 'full' },
      { path: '**', redirectTo: 'frontpage', pathMatch: 'full' }
    ]),
    FrontPageModule,
    ArticleModule,
    MapPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
