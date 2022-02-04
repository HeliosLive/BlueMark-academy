import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Q13Component } from './q13.component';
import { Q13RoutingModule } from './q13-routing.module';

@NgModule({
  declarations: [Q13Component],
  imports: [CommonModule, ReactiveFormsModule, Q13RoutingModule],
  exports: [Q13Component],
})
export class Q13Module {}
