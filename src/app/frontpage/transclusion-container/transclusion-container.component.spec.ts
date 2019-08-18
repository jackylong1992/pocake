import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransclusionContainerComponent } from './transclusion-container.component';

describe('TransclusionContainerComponent', () => {
  let component: TransclusionContainerComponent;
  let fixture: ComponentFixture<TransclusionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransclusionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransclusionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
