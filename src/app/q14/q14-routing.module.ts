import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q14Component } from './q14.component';

const routes: Routes = [
  {
    path: '',
    component: Q14Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q14RoutingModule {}
