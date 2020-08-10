import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives.component';
import { CheckboxControlValueAccessor2 } from './checkbox.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DirectivesComponent,
    CheckboxControlValueAccessor2,
  ],
  exports: [
    DirectivesComponent,
    CheckboxControlValueAccessor2,
  ]
})
export class DirectivesModule { }
