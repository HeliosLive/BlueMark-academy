import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q14Component } from './q14.component';
import { Q14RoutingModule } from './q14-routing.module';

@NgModule({
  declarations: [Q14Component],
  imports: [CommonModule, Q14RoutingModule],
  exports: [Q14Component],
})
export class Q14Module {}
