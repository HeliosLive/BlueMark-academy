import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q16Component } from './q16.component';
import { Q16RoutingModule } from './q16-routing.module';

@NgModule({
  declarations: [Q16Component],
  imports: [CommonModule, Q16RoutingModule],
  exports: [Q16Component],
})
export class Q16Module {}
