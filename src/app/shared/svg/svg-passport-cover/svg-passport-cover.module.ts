import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgPassportCoverComponent } from './svg-passport-cover.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgPassportCoverComponent,
	],
	exports: [
		SvgPassportCoverComponent,
	],
	entryComponents: [
		SvgPassportCoverComponent,
	],
})
export class SvgPassportCoverModule { }
