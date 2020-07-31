import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsPageComponent } from './analytics-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnalyticsPageComponent],
  exports: [AnalyticsPageComponent]
})
export class AnalyticsPageModule { }
