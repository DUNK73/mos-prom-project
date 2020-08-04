import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { MainPageComponent } from './main-page.component';
import { SvgCommonModule } from './../../svg/svg-common.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    SvgCommonModule,
  ],
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
