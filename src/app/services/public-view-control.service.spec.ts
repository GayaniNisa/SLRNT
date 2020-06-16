import { TestBed } from '@angular/core/testing';

import { PublicViewControlService } from './public-view-control.service';

describe('PublicViewControlService', () => {
  let service: PublicViewControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicViewControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
