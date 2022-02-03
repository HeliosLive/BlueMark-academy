import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q7Component } from './q7.component';

const routes: Routes = [
  {
    path: '',
    component: Q7Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q7RoutingModule {}
