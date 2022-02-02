import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q6Component } from './q6.component';

const routes: Routes = [
  {
    path: '',
    component: Q6Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q6RoutingModule {}
