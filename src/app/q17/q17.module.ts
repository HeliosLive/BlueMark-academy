import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Q17ChildComponent, Q17Component } from './q17.component';
import { Q17RoutingModule } from './q17-routing.module';

@NgModule({
  declarations: [Q17Component, Q17ChildComponent],
  imports: [CommonModule, ReactiveFormsModule, Q17RoutingModule],
  exports: [Q17Component],
})
export class Q17Module {}
