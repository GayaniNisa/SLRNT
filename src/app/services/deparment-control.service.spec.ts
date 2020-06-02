import { TestBed } from '@angular/core/testing';

import { DeparmentControlService } from './deparment-control.service';

describe('DeparmentControlService', () => {
  let service: DeparmentControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeparmentControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
