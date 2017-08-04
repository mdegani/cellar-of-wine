import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MainRouterModule } from './router.module';
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
    MainRouterModule
  ],
  providers: [ApiService, BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
