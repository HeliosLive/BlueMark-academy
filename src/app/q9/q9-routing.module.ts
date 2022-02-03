import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q9Component } from './q9.component';

const routes: Routes = [
  {
    path: '',
    component: Q9Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q9RoutingModule {}
