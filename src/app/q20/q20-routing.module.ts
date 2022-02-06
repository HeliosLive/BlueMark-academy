import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Q20Component, Q20ChildComponent } from './q20.component';

const routes: Routes = [
  {
    path: '',
    component: Q20Component,
    children: [
      {
        path: 'users',
        component: Q20ChildComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Q20RoutingModule {}
