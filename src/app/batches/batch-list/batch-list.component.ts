import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {

  constructor(public batchService: BatchService) {
  }

  ngOnInit() {
    this.batchService.getBatches();
  }

}
