import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPayhereComponent } from './order-payhere.component';

describe('OrderPayhereComponent', () => {
  let component: OrderPayhereComponent;
  let fixture: ComponentFixture<OrderPayhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPayhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPayhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
