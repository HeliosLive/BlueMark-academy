import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q10Component } from './q10.component';

const routes: Routes = [
  {
    path: '',
    component: Q10Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q10RoutingModule {}
