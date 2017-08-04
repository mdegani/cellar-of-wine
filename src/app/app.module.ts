import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { BatchComponent } from './batches/batch-list/batch-list.component';
import { AboutComponent } from './about/about.component';
import { BatchService } from './batches/batch.service';

@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'batches',
        component: BatchComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: '',
        component: BatchComponent
      }
    ])
  ],
  providers: [ApiService, BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
