import { TestBed, inject } from '@angular/core/testing';

import { FoServiceService } from './fo.service';

describe('FoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoServiceService]
    });
  });

  it('should be created', inject([FoServiceService], (service: FoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
