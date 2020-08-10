import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsIndexPageComponent } from './events-index-page/events-index-page.component';
import { EventsListPageComponent } from './events-list-page/events-list-page.component';
import { EventsPageRoutingModule } from './events-page.routing.module';
import { EventsCalendarComponent } from './components/events-calendar/events-calendar.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { SvgCommonModule } from '../../shared/svg/svg-common.module';


@NgModule({
  imports: [
    CommonModule,
    EventsPageRoutingModule,

    SvgCommonModule,
  ],
  declarations: [
    EventsIndexPageComponent,
    EventsListPageComponent,
    EventsCalendarComponent,
    EventsListComponent,
  ],
  exports: [
    EventsIndexPageComponent,
    EventsListPageComponent
  ]
})
export class EventsPageModule { }
