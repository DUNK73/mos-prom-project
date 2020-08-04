import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from './../svg-common';

@Component({
	selector: 'app-svg-passport-cover',
	templateUrl: './svg-passport-cover.component.svg',
	styleUrls: ['./svg-passport-cover.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPassportCoverComponent extends SvgCommon {
}
