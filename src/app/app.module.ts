import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';

import { WineCommonModule } from './common/common.module';
import { MainRouterModule } from './router/router.module';

import { BatchesModule } from './batches/batches.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { AboutComponent } from './about/about.component';
import { BatchService } from './batches/batch.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    WineCommonModule,
    BatchesModule,
    MainRouterModule,
    HttpModule,
  ],
  providers: [ApiService, BatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
