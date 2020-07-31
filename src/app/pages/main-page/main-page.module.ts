import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { MainPageComponent } from './main-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
