import { TestBed } from '@angular/core/testing';

import { ClientData } from './client-data.service';

describe('ClientDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientData = TestBed.get(ClientData);
    expect(service).toBeTruthy();
  });
});
