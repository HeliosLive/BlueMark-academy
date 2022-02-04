import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q13Component } from './q13.component';

const routes: Routes = [
  {
    path: '',
    component: Q13Component,
    children: [
      {
        path: 'settings',
        component: Q13Component,
      },
      {
        path: 'profile',
        component: Q13Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q13RoutingModule {}
