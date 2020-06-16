import { TestBed } from '@angular/core/testing';

import { OrderControlService } from './order-control.service';

describe('OrderControlService', () => {
  let service: OrderControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
