import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q12ChildComponent, Q12Component } from './q12.component';
import { Q12RoutingModule } from './q12-routing.module';

@NgModule({
  declarations: [Q12Component, Q12ChildComponent],
  imports: [CommonModule, Q12RoutingModule],
  exports: [Q12Component],
})
export class Q12Module {}
