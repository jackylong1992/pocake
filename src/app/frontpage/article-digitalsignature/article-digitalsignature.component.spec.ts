import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDigitalsignatureComponent } from './article-digitalsignature.component';

describe('ArticleDigitalsignatureComponent', () => {
  let component: ArticleDigitalsignatureComponent;
  let fixture: ComponentFixture<ArticleDigitalsignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDigitalsignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDigitalsignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
