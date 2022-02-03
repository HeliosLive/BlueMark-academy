import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Q8Component, Q8HighlightDirective } from './q8.component';
import { Q8RoutingModule } from './q8-routing.module';

@NgModule({
  declarations: [Q8Component, Q8HighlightDirective],
  imports: [CommonModule, Q8RoutingModule],
  exports: [Q8Component],
})
export class Q8Module {}
