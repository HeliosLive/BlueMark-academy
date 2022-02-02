import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Q5ChildComponent, Q5Component } from './q5.component';
import { Q5RoutingModule } from './q5-routing.module';

@NgModule({
  declarations: [Q5Component, Q5ChildComponent],
  imports: [CommonModule, FormsModule, Q5RoutingModule],
  exports: [Q5Component, Q5ChildComponent],
})
export class Q5Module {}
