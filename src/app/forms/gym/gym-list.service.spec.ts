import { TestBed } from '@angular/core/testing';

import { GymListService } from './gym-list.service';

describe('GymListService', () => {
  let service: GymListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
