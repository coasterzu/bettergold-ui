import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMarketComponent } from './mini-market.component';

describe('MiniMarketComponent', () => {
  let component: MiniMarketComponent;
  let fixture: ComponentFixture<MiniMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
