import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgQuestionCircleComponent } from './svg-question-circle.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgQuestionCircleComponent,
	],
	exports: [
		SvgQuestionCircleComponent,
	],
})

export class SvgQuestionCircleModule { }
