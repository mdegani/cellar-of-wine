import { Component, OnInit } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { IBatch } from '../../../types/batches.interface';

@Component({
  selector: 'app-new-batch',
  templateUrl: './new-batch.component.html',
  styleUrls: ['./new-batch.component.css']
})
export class NewBatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @dispatch() addBatch = (newBatch: IBatch) => ({ type: 'ADD_BATCH', payload: newBatch });
}
