import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './events-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventsPageComponent],
  exports: [EventsPageComponent]
})
export class EventsPageModule { }
