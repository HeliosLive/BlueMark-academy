import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q17Component } from './q17.component';

const routes: Routes = [
  {
    path: '',
    component: Q17Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q17RoutingModule {}
