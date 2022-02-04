import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q11Component } from './q11.component';

const routes: Routes = [
  {
    path: '',
    component: Q11Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q11RoutingModule {}
