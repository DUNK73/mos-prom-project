import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
      },
      {
        path: 'list',
        component: EventsListPageComponent,
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
