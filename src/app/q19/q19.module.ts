import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q19Component } from './q19.component';
import { Q19RoutingModule } from './q19-routing.module';

@NgModule({
  declarations: [Q19Component],
  imports: [CommonModule, Q19RoutingModule],
  exports: [Q19Component],
})
export class Q19Module {}
