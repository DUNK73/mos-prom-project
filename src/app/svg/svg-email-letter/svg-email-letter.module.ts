import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgEmailLetterComponent } from './svg-email-letter.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgEmailLetterComponent,
	],
	exports: [
		SvgEmailLetterComponent,
	],
})

export class SvgEmailLetterModule { }
