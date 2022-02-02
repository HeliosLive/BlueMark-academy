import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Q6Component } from './q6.component';
import { Q6RoutingModule } from './q6-routing.module';

@NgModule({
  declarations: [Q6Component],
  imports: [CommonModule, ReactiveFormsModule, Q6RoutingModule],
  exports: [Q6Component],
})
export class Q6Module {}
