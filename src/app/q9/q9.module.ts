import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q9ChildComponent, Q9Component } from './q9.component';
import { Q9RoutingModule } from './q9-routing.module';

@NgModule({
  declarations: [Q9Component, Q9ChildComponent],
  imports: [CommonModule, Q9RoutingModule],
  exports: [Q9Component],
})
export class Q9Module {}
