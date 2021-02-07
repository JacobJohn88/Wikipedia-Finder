import { TestBed } from '@angular/core/testing';

import { WikipediaFinderService } from './wikipedia-finder.service';

describe('WikipediaFinderService', () => {
  let service: WikipediaFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikipediaFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
