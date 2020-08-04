import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgTickComponent } from './svg-tick.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgTickComponent,
	],
	exports: [
		SvgTickComponent,
	],
})

export class SvgTickModule { }
