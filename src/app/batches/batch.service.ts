import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BatchService {

  public readonly batches: Subject<any> = new Subject();

  constructor(private api: ApiService) { }

  getBatches() {
    this.api.get('batches').subscribe(batch => {
      this.batches.next(batch);
    });
  }
}
