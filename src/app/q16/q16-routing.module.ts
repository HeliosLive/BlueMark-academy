import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q16Component } from './q16.component';

const routes: Routes = [
  {
    path: '',
    component: Q16Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q16RoutingModule {}
