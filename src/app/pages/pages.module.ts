import { PageContainerComponent } from './page-container/page-container.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing.module';

@NgModule({
  imports: [
    CommonModule,

    PagesRoutingModule,

  ],
  declarations: [
    PageContainerComponent
  ]
})
export class PagesModule { }
