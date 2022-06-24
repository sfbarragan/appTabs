import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabNuevaPage } from './tab-nueva.page';

const routes: Routes = [
  {
    path: '',
    component: TabNuevaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabNuevaPageRoutingModule {}
