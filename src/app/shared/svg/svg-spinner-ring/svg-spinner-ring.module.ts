import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgSpinnerRingComponent } from './svg-spinner-ring.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgSpinnerRingComponent,
	],
	exports: [
		SvgSpinnerRingComponent,
	],
})

export class SvgSpinnerRingModule { }
