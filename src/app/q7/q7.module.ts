import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoolCasePipe, Q7Component } from './q7.component';
import { Q7RoutingModule } from './q7-routing.module';

@NgModule({
  declarations: [Q7Component, CoolCasePipe],
  imports: [CommonModule, FormsModule, Q7RoutingModule],
  exports: [Q7Component],
})
export class Q7Module {}
