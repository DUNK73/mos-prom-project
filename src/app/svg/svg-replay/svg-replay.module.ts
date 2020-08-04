import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgReplayComponent } from './svg-replay.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SvgReplayComponent,
	],
	exports: [
		SvgReplayComponent,
	],
})

export class SvgReplayModule { }
