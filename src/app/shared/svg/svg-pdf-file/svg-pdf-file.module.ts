import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgPdfFileComponent } from './svg-pdf-file.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgPdfFileComponent,
	],
	exports: [
		SvgPdfFileComponent,
	],
})
export class SvgPdfFileModule { }
