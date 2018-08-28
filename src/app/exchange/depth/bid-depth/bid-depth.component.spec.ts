import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidDepthComponent } from './bid-depth.component';

describe('BidDepthComponent', () => {
  let component: BidDepthComponent;
  let fixture: ComponentFixture<BidDepthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidDepthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidDepthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
