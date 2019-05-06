import { TestBed } from '@angular/core/testing';

import { TwetService } from './twet.service';

describe('TwetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwetService = TestBed.get(TwetService);
    expect(service).toBeTruthy();
  });
});
