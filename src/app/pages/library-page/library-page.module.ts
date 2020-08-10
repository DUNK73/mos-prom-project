import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryMainPageComponent } from './library-main-page/library-main-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LibraryPageRoutingModule } from './library-page.routing.module';
import { LibraryIndexPageComponent } from './library-index-page/library-index-page.component';
import { LibraryListPageComponent } from './library-list-page/library-list-page.component';
import { LibraryDetailPageComponent } from './library-detail-page/library-detail-page.component';
import { LibraryListItemComponent } from './components/library-list-item/library-list-item.component';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    LibraryPageRoutingModule,
    DirectivesModule,
    ComponentsModule,
  ],
  declarations: [
    LibraryIndexPageComponent,
    LibraryMainPageComponent,
    LibraryListPageComponent,
    LibraryDetailPageComponent,

    LibraryListItemComponent,
  ],
  exports: [
    LibraryIndexPageComponent,
    LibraryMainPageComponent,
    LibraryListPageComponent,
    LibraryDetailPageComponent
  ]
})
export class LibraryPageModule { }
