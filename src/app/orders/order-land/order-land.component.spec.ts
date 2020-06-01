import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLandComponent } from './order-land.component';

describe('OrderLandComponent', () => {
  let component: OrderLandComponent;
  let fixture: ComponentFixture<OrderLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
