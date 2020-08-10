import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { TinySliderComponent } from './tiny-slider/tiny-slider.component';
import { MarkdownViewerComponent } from './markdown-viewer/markdown-viewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComponentsComponent,
    TinySliderComponent,
    MarkdownViewerComponent,
  ],
  exports: [
    ComponentsComponent,
    TinySliderComponent,
    MarkdownViewerComponent,
  ],
})
export class ComponentsModule { }
