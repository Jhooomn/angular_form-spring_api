import { TestBed } from '@angular/core/testing';

import { CustomerServicesService } from './customer-services.service';

describe('CustomerServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerServicesService = TestBed.get(CustomerServicesService);
    expect(service).toBeTruthy();
  });
});
