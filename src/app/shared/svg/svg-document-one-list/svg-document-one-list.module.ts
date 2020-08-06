import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgDocumentOneListComponent } from './svg-document-one-list.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgDocumentOneListComponent,
	],
	exports: [
		SvgDocumentOneListComponent,
	],
})

export class SvgDocumentOneListModule { }
