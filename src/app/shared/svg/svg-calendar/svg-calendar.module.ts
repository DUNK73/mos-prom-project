import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgCalendarComponent } from './svg-calendar.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgCalendarComponent,
	],
	exports: [
		SvgCalendarComponent,
	],
})

export class SvgCalendarModule { }
