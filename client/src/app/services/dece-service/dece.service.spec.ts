import { TestBed } from '@angular/core/testing';

import { DeceService } from './dece.service';

describe('DeceService', () => {
  let service: DeceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
