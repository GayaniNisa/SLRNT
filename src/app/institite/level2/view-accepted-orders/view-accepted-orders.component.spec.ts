import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcceptedOrdersComponent } from './view-accepted-orders.component';

describe('ViewAcceptedOrdersComponent', () => {
  let component: ViewAcceptedOrdersComponent;
  let fixture: ComponentFixture<ViewAcceptedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAcceptedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcceptedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
