import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgFastPaymentsComponent } from './svg-fast-payments.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgFastPaymentsComponent,
	],
	exports: [
		SvgFastPaymentsComponent,
	],
	entryComponents: [
		SvgFastPaymentsComponent,
	],
})
export class SvgFastPaymentsModule { }
