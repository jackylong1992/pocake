import { NgModule } from '@angular/core';
import { FrontPageWrapperComponent } from './frontpagewrapper.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {FeedbackComponent} from './feedback-slider/feedback.component';
import { FrontpageContentComponent } from './frontpage-content/frontpage-content.component';
import { ArticleDigitalsignatureComponent } from './article-digitalsignature/article-digitalsignature.component';
import { ArticleElectricbillComponent } from './article-electricbill/article-electricbill.component';
import { ArticleGuideComponent } from './article-guide/article-guide.component';
import { SocialInsuranceComponent } from './social-insurance/social-insurance.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: 'frontpage', 
        component: FrontPageWrapperComponent,
        children: [
        ]
       },
       { 
        path: 'digital-signature', 
        component: ArticleDigitalsignatureComponent,
        children: [
        ]
       },
       { 
        path: 'electric-bill', 
        component: ArticleElectricbillComponent,
        children: [
        ]
       },
       { 
        path: 'price', 
        component: ArticleGuideComponent,
        children: [
        ]
       },
       { 
        path: 'social-insurance', 
        component: SocialInsuranceComponent,
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
    FeedbackComponent,
    FrontpageContentComponent,
    ArticleDigitalsignatureComponent,
    ArticleElectricbillComponent,
    ArticleGuideComponent,
    SocialInsuranceComponent
  ],
  exports: [
    
  ]
})
export class FrontPageModule { }
