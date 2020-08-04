import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgFilterComponent } from './svg-filter.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgFilterComponent,
	],
	exports: [
		SvgFilterComponent,
	],
})

export class SvgFilterModule { }
