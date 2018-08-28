import { TestBed, inject } from '@angular/core/testing';

import { LogoutAuthGuardService } from './logout-auth-guard.service';

describe('LogoutAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogoutAuthGuardService]
    });
  });

  it('should be created', inject([LogoutAuthGuardService], (service: LogoutAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
