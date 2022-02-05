import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q18Component } from './q18.component';
import { Q18RoutingModule } from './q18-routing.module';

@NgModule({
  declarations: [Q18Component],
  imports: [CommonModule, Q18RoutingModule],
  exports: [Q18Component],
})
export class Q18Module {}
