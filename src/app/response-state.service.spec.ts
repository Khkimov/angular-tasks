import { TestBed } from '@angular/core/testing';

import { ResponseStateService } from './response-state.service';

describe('ResponseStateService', () => {
  let service: ResponseStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
