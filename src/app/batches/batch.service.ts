import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Subject } from 'rxjs/Subject';
import { IBatch } from '../../types/batches.interface';

@Injectable()
export class BatchService {

  public readonly batches: Subject<IBatch[]> = new Subject();

  constructor(private api: ApiService) { }

  getBatches() {
    this.api.get('batches').subscribe(batch => {
      this.batches.next(batch);
    });
  }

  addBatch(batch: IBatch) {
    this.api.post('batches', batch);
  }
}
