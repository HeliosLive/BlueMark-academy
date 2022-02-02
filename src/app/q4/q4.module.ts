import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q4ChildComponent, Q4Component } from './q4.component';
import { Q4RoutingModule } from './q4-routing.module';

@NgModule({
  declarations: [Q4Component, Q4ChildComponent],
  imports: [CommonModule, Q4RoutingModule],
  exports: [Q4Component, Q4ChildComponent],
})
export class Q4Module {}
