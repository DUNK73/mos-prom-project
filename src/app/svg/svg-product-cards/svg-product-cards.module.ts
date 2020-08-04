import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgProductCardsComponent } from './svg-product-cards.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgProductCardsComponent,
	],
	exports: [
		SvgProductCardsComponent,
	],
})

export class SvgProductCardsModule { }
