import { TestBed } from '@angular/core/testing';

import { Level0Service } from './level0.service';

describe('Level0Service', () => {
  let service: Level0Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Level0Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
