import { TestBed } from '@angular/core/testing';

import { InstituteControlService } from './institute-control.service';

describe('InstituteControlService', () => {
  let service: InstituteControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituteControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
