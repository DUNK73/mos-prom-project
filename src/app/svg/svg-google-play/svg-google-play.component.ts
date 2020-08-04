import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-google-play',
	templateUrl: './svg-google-play.component.svg',
	styleUrls: ['./svg-google-play.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgGooglePlayComponent extends SvgCommon { }
