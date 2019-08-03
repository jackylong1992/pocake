import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleElectricbillComponent } from './article-electricbill.component';

describe('ArticleElectricbillComponent', () => {
  let component: ArticleElectricbillComponent;
  let fixture: ComponentFixture<ArticleElectricbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleElectricbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleElectricbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
