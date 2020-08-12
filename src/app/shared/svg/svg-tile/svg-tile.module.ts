import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgTileComponent } from './svg-tile.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SvgTileComponent,
  ],
  exports: [
    SvgTileComponent,
  ],
})

export class SvgTileModule { }
