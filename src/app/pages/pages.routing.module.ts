import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';

import { MainPageComponent } from './main-page/main-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { PageContainerComponent } from './page-container/page-container.component';


const routes: Routes = [
  {
    path: '',
    component: PageContainerComponent,
    children: [
      {
        path: '',
        component: MainPageComponent,
      },
      {
        path: 'library',
        loadChildren: () => import('./library-page/library-page.module').then(m => m.LibraryPageModule),
      },
      {
        path: 'analytics',
        component: AnalyticsPageComponent,
      },
      {
        path: 'events',
        loadChildren: () => import('./events-page/events-page.module').then(m => m.EventsPageModule),
      },
      {
        path: 'news',
        component: NewsPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
