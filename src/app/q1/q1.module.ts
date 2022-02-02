import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q1Component } from './q1.component';
import { Q1RoutingModule } from './q1-routing.module';

@NgModule({
  declarations: [Q1Component],
  imports: [CommonModule, Q1RoutingModule],
  exports: [Q1Component],
})
export class Q1Module {}
