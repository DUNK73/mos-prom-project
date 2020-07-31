import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageModule } from './main-page/main-page.module';
import { PageContainerComponent } from './page-container/page-container.component';
import { PagesRoutingModule } from './pages.routing.module';

import { AnalyticsPageModule } from './analytics-page/analytics-page.module';
import { EventsPageModule } from './events-page/events-page.module';
import { LibraryPageModule } from './library-page/library-page.module';



@NgModule({
  imports: [
    CommonModule,

    PagesRoutingModule,

    MainPageModule,
    AnalyticsPageModule,
    EventsPageModule,
    LibraryPageModule,

  ],
  declarations: [
    PageContainerComponent
  ]
})
export class PagesModule { }
