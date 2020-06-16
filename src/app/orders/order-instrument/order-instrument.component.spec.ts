import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInstrumentComponent } from './order-instrument.component';

describe('OrderInstrumentComponent', () => {
  let component: OrderInstrumentComponent;
  let fixture: ComponentFixture<OrderInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
