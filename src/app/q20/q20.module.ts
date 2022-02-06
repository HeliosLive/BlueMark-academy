import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Q20ChildComponent, Q20Component } from './q20.component';
import { Q20RoutingModule } from './q20-routing.module';

@NgModule({
  declarations: [Q20Component, Q20ChildComponent],
  imports: [CommonModule, FormsModule, Q20RoutingModule],
  exports: [Q20Component],
})
export class Q20Module {}
