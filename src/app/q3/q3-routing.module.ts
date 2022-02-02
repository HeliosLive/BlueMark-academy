import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q3Component } from './q3.component';

const routes: Routes = [
  {
    path: '',
    component: Q3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q3RoutingModule {}
