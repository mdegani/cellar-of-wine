import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BatchesComponent } from '../batches/batches/batches.component';
import { BatchListComponent } from '../batches/batch-list/batch-list.component';
import { AboutComponent } from '../about/about.component';
import { NewBatchComponent } from '../batches/new-batch/new-batch.component';

@Component({
  template: 'are you lost?'
})
export class AreYouLostComponent { }

@Component({
  template: 'wine cellar home'
})
export class WineHomeComponent {}

const routes: Routes = [
  {
    path: '',
    component: WineHomeComponent
  },
  {
    path: 'batches',
    component: BatchesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: BatchListComponent
      },
      {
        path: 'new',
        component: NewBatchComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: AreYouLostComponent
  }
];

@NgModule({
  declarations: [AreYouLostComponent, WineHomeComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRouterModule { }

