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
  {
    path: 'q7',
    loadChildren: () => import('./q7/q7.module').then((m) => m.Q7Module),
  },
  {
    path: 'q8',
    loadChildren: () => import('./q8/q8.module').then((m) => m.Q8Module),
  },
  {
    path: 'q9',
    loadChildren: () => import('./q9/q9.module').then((m) => m.Q9Module),
  },
  {
    path: 'q10',
    loadChildren: () => import('./q10/q10.module').then((m) => m.Q10Module),
  },
  {
    path: 'q11',
    loadChildren: () => import('./q11/q11.module').then((m) => m.Q11Module),
  },
  {
    path: 'q12',
    loadChildren: () => import('./q12/q12.module').then((m) => m.Q12Module),
  },
  {
    path: 'q13',
    loadChildren: () => import('./q13/q13.module').then((m) => m.Q13Module),
  },
  {
    path: 'q14',
    loadChildren: () => import('./q14/q14.module').then((m) => m.Q14Module),
  },
  {
    path: 'q15',
    loadChildren: () => import('./q15/q15.module').then((m) => m.Q15Module),
  },
  {
    path: 'q16',
    loadChildren: () => import('./q16/q16.module').then((m) => m.Q16Module),
  },
  { path: '', redirectTo: '/q1', pathMatch: 'full' },
  { path: '**', redirectTo: '/q1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
