import { TestBed } from '@angular/core/testing';

import { MyutilityservService } from './myutilityserv.service';

describe('MyutilityservService', () => {
  let service: MyutilityservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyutilityservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
