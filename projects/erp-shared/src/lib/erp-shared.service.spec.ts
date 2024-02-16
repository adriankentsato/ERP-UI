import { TestBed } from '@angular/core/testing';

import { ErpSharedService } from './erp-shared.service';

describe('ErpSharedService', () => {
  let service: ErpSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErpSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
