import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Q3Component } from './q3.component';
import { Q3RoutingModule } from './q3-routing.module';

@NgModule({
  declarations: [Q3Component],
  imports: [CommonModule, FormsModule, Q3RoutingModule],
  exports: [Q3Component],
})
export class Q3Module {}
