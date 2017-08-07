import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { createLogger } from 'redux-logger';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { WineCommonModule } from './common/common.module';
import { MainRouterModule } from './router/router.module';
import { IBatch, IAppState } from '../types/batches.interface';
import { BatchesModule } from './batches/batches.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './services/api.service';

import { BatchService } from './batches/batch.service';
import { rootReducer } from './store/reducers';


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
    NgReduxModule
  ],
  providers: [ApiService, BatchService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, { batch: { batches: [] } }, [createLogger()]);
  }
}
