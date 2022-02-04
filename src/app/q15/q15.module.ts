import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q15Component, Q15Service } from './q15.component';
import { Q15RoutingModule } from './q15-routing.module';

@NgModule({
  declarations: [Q15Component],
  imports: [CommonModule, Q15RoutingModule],
  providers: [Q15Service],
  exports: [Q15Component],
})
export class Q15Module {}
