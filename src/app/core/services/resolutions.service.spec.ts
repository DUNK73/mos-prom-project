import { TestBed } from '@angular/core/testing';

import { ResolutionsService } from './resolutions.service';

describe('TestService', () => {
  let service: ResolutionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolutionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
