import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { ViewFormComponent } from './view-form/view-form.component';


@NgModule({
  declarations: [
    ViewFormComponent
  ],
  imports: [
    CommonModule,
    DynamicFormRoutingModule
  ]
})
export class DynamicFormModule { }
