import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Q2Component } from './q2.component';
import { Q2RoutingModule } from './q2-routing.module';

@NgModule({
  declarations: [Q2Component],
  imports: [CommonModule, FormsModule, Q2RoutingModule],
  exports: [Q2Component],
})
export class Q2Module {}
