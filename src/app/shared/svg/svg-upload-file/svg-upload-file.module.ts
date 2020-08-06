import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgUploadFileComponent } from './svg-upload-file.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgUploadFileComponent,
	],
	exports: [
		SvgUploadFileComponent,
	],
})

export class SvgUploadFileModule { }
