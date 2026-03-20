import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rEGISTEREDACCESSGuard } from './registered-access-guard';

describe('rEGISTEREDACCESSGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => rEGISTEREDACCESSGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
