import { TestBed } from '@angular/core/testing';

import { InstrumentControlService } from './instrument-control.service';

describe('InstrumentControlService', () => {
  let service: InstrumentControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
