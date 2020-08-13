import { TestBed } from '@angular/core/testing';

import { SaveOptionService } from './save-option.service';

describe('SaveOptionService', () => {
  let service: SaveOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
