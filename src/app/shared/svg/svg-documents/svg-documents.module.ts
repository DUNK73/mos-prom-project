import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgDocumentsComponent } from './svg-documents.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgDocumentsComponent,
	],
	exports: [
		SvgDocumentsComponent,
	],
})
export class SvgDocumentsModule { }
