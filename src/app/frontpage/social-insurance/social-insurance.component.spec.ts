import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialInsuranceComponent } from './social-insurance.component';

describe('SocialInsuranceComponent', () => {
  let component: SocialInsuranceComponent;
  let fixture: ComponentFixture<SocialInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
