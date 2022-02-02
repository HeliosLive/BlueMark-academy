import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q1Component } from './q1.component';

const routes: Routes = [
  {
    path: '',
    component: Q1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q1RoutingModule {}
