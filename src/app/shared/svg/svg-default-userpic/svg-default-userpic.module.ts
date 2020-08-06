import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgDefaultUserpicComponent } from './svg-default-userpic.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgDefaultUserpicComponent,
	],
	exports: [
		SvgDefaultUserpicComponent,
	],
})
export class SvgDefaultUserpicModule { }
