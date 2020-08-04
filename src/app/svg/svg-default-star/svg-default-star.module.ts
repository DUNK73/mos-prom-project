import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgDefaultStarComponent } from './svg-default-star.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgDefaultStarComponent,
	],
	exports: [
		SvgDefaultStarComponent,
	],
})
export class SvgDefaultStarModule { }
