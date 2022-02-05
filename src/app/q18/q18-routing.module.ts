import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q18Component } from './q18.component';

const routes: Routes = [
  {
    path: '',
    component: Q18Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q18RoutingModule {}
