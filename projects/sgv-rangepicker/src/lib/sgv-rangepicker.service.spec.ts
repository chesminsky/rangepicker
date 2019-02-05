import { TestBed } from '@angular/core/testing';

import { SgvRangepickerService } from './sgv-rangepicker.service';

describe('SgvRangepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SgvRangepickerService = TestBed.get(SgvRangepickerService);
    expect(service).toBeTruthy();
  });
});
