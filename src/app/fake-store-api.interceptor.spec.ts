import { TestBed } from '@angular/core/testing';

import { FakeStoreApiInterceptor } from './fake-store-api.interceptor';

describe('FakeStoreApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FakeStoreApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FakeStoreApiInterceptor = TestBed.inject(FakeStoreApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
