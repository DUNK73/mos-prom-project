import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { TinySliderComponent } from './tiny-slider/tiny-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComponentsComponent,
    TinySliderComponent
  ],
  exports: [
    ComponentsComponent,
    TinySliderComponent
  ],
})
export class ComponentsModule { }
