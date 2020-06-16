import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaidOrdersComponent } from './view-paid-orders.component';

describe('ViewPaidOrdersComponent', () => {
  let component: ViewPaidOrdersComponent;
  let fixture: ComponentFixture<ViewPaidOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaidOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaidOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
