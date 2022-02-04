import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { Q11Component, Q11Service } from './q11.component';
import { Q11RoutingModule } from './q11-routing.module';

@NgModule({
  declarations: [Q11Component],
  imports: [CommonModule, ReactiveFormsModule, Q11RoutingModule],
  providers: [Q11Service],
  exports: [Q11Component],
})
export class Q11Module {}
