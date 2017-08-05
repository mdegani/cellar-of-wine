import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { WineCommonModule } from '../common/common.module';
import { BatchListComponent } from '../batches/batch-list/batch-list.component';
import { NewBatchComponent } from '../batches/new-batch/new-batch.component';
import { BatchesComponent } from '../batches/batches/batches.component';

@NgModule({
  imports: [WineCommonModule, RouterModule],
  declarations: [BatchListComponent, NewBatchComponent, BatchesComponent],
  exports: [BatchListComponent, NewBatchComponent, BatchesComponent],
})
export class BatchesModule { }
