import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { BatchComponent } from './batches/batch/batch.component';
import { BatchService } from './batches/batch.service';

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ApiService, BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
