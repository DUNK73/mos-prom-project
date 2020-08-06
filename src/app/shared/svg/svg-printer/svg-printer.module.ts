import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgPrinterComponent } from './svg-printer.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgPrinterComponent,
	],
	exports: [
		SvgPrinterComponent,
	],
})

export class SvgPrinterModule { }
