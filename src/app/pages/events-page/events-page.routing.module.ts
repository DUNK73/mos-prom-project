import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsCalendarComponent } from './components/events-calendar/events-calendar.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventsIndexPageComponent } from './events-index-page/events-index-page.component';
import { EventsListPageComponent } from './events-list-page/events-list-page.component';



const routes: Routes = [
  {
    path: '',
    component: EventsIndexPageComponent,
    children: [
      {
        path: '',
        component: EventsListPageComponent,
        children: [
          {
            path: 'list',
            component: EventsListComponent,
          },
          {
            path: 'calendar',
            component: EventsCalendarComponent,
          },
          {
            path: '**',
            redirectTo: 'list'
          }

        ]
      },
      // {
      //   path: 'list/:id',
      //   component: LibraryDetailPageComponent,
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsPageRoutingModule { }
