import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q19Component } from './q19.component';

const routes: Routes = [
  {
    path: '',
    component: Q19Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q19RoutingModule {}
