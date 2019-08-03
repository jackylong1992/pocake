import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGuideComponent } from './article-guide.component';

describe('ArticleGuideComponent', () => {
  let component: ArticleGuideComponent;
  let fixture: ComponentFixture<ArticleGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
