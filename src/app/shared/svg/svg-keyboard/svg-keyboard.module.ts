import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgKeyboardComponent } from './svg-keyboard.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgKeyboardComponent,
	],
	exports: [
		SvgKeyboardComponent,
	],
})
export class SvgKeyboardModule { }
