import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgAppStoreComponent } from './svg-app-store.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgAppStoreComponent,
	],
	exports: [
		SvgAppStoreComponent,
	],
})

export class SvgAppStoreModule { }
