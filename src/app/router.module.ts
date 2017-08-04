import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BatchComponent } from './batches/batch-list/batch-list.component';
import { AboutComponent } from './about/about.component';

@Component({
  template: `page not found`
})
class NotFoundComponent { }

const routes: Routes = [
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
  }, {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRouterModule { }

