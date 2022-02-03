import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Q10Component } from './q10.component';
import { Q10RoutingModule } from './q10-routing.module';

@NgModule({
  declarations: [Q10Component],
  imports: [CommonModule, HttpClientModule, Q10RoutingModule],
  exports: [Q10Component],
})
export class Q10Module {}
