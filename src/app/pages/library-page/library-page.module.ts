import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryPageComponent } from './library-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [LibraryPageComponent],
  exports: [LibraryPageComponent]
})
export class LibraryPageModule { }
