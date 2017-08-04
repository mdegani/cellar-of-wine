import { TestBed, inject } from '@angular/core/testing';

import { BatchService } from './batch.service';
import { ApiService } from '../services/api.service';

describe('BatchService', () => {
  beforeEach(() => {
    const mockApiService = {
      get: endpoint => null
    } as ApiService;
    TestBed.configureTestingModule({
      providers: [BatchService, {
        provide: ApiService,
        useValue: mockApiService
      }]
    });
  });

  it('should be created', inject([BatchService], (service: BatchService) => {
    expect(service).toBeTruthy();
  }));
});
