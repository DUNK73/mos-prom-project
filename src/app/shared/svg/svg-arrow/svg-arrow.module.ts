import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgArrowComponent } from './svg-arrow.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgArrowComponent,
	],
	exports: [
		SvgArrowComponent,
	],
})

export class SvgArrowModule { }
