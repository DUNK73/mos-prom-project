import { LibraryListPageComponent } from './library-list-page/library-list-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LibraryIndexPageComponent } from './library-index-page/library-index-page.component';
import { LibraryMainPageComponent } from './library-main-page/library-main-page.component';
import { LibraryDetailPageComponent } from './library-detail-page/library-detail-page.component';



const routes: Routes = [
  {
    path: '',
    component: LibraryIndexPageComponent,
    children: [
      {
        path: '',
        component: LibraryMainPageComponent,
      },
      {
        path: 'list',
        component: LibraryListPageComponent,
      },
      {
        path: 'list/:id',
        component: LibraryDetailPageComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryPageRoutingModule { }
