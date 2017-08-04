import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ApiService } from './api.service';

describe('ApiService', () => {
  beforeEach(() => {
    const mockHttp = {
      get: null
    } as Http;
    spyOn(mockHttp, 'get').and.callFake(() => Observable.of([]));
    TestBed.configureTestingModule({
      providers: [ApiService, {
        provide: Http,
        useValue: mockHttp
      }]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
