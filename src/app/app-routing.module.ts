import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'q1',
    loadChildren: () => import('./q1/q1.module').then((m) => m.Q1Module),
  },
  {
    path: 'q2',
    loadChildren: () => import('./q2/q2.module').then((m) => m.Q2Module),
  },
  {
    path: 'q3',
    loadChildren: () => import('./q3/q3.module').then((m) => m.Q3Module),
  },
  {
    path: 'q4',
    loadChildren: () => import('./q4/q4.module').then((m) => m.Q4Module),
  },
  {
    path: 'q5',
    loadChildren: () => import('./q5/q5.module').then((m) => m.Q5Module),
  },
  {
    path: 'q6',
    loadChildren: () => import('./q6/q6.module').then((m) => m.Q6Module),
  },
  { path: '', redirectTo: '/q1', pathMatch: 'full' },
  { path: '**', redirectTo: '/q1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
