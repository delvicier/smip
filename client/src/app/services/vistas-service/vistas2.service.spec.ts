import { TestBed } from '@angular/core/testing';

import { Vistas2Service } from './vistas2.service';

describe('Vistas2Service', () => {
  let service: Vistas2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Vistas2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
