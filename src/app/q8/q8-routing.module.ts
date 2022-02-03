import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q8Component } from './q8.component';

const routes: Routes = [
  {
    path: '',
    component: Q8Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q8RoutingModule {}
