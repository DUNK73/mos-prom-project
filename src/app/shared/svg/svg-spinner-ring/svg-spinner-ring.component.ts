import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-spinner-ring',
	templateUrl: './svg-spinner-ring.component.svg',
	styleUrls: ['./svg-spinner-ring.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgSpinnerRingComponent extends SvgCommon { }
