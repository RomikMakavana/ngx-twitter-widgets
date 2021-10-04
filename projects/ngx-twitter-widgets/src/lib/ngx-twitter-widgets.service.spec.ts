import { TestBed } from '@angular/core/testing';

import { NgxTwitterWidgetsService } from './ngx-twitter-widgets.service';

describe('NgxTwitterWidgetsService', () => {
  let service: NgxTwitterWidgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTwitterWidgetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
