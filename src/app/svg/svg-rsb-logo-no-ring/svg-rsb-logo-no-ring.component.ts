import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-rsb-logo-no-ring',
	templateUrl: './svg-rsb-logo-no-ring.component.svg',
	styleUrls: ['./svg-rsb-logo-no-ring.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,

})

export class SvgRsbLogoNoRingComponent extends SvgCommon { }
