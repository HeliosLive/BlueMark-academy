import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q15Component } from './q15.component';

const routes: Routes = [
  {
    path: '',
    component: Q15Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q15RoutingModule {}
