import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q5Component } from './q5.component';

const routes: Routes = [
  {
    path: '',
    component: Q5Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q5RoutingModule {}
