import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchPriceComponent } from './match-price.component';

describe('MatchPriceComponent', () => {
  let component: MatchPriceComponent;
  let fixture: ComponentFixture<MatchPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
