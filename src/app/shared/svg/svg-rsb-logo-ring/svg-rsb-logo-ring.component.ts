import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-rsb-logo-ring',
	templateUrl: './svg-rsb-logo-ring.component.svg',
	styleUrls: ['./svg-rsb-logo-ring.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgRsbLogoRingComponent extends SvgCommon {

}
