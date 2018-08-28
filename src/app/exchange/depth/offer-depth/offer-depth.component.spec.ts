import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDepthComponent } from './offer-depth.component';

describe('OfferDepthComponent', () => {
  let component: OfferDepthComponent;
  let fixture: ComponentFixture<OfferDepthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferDepthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
