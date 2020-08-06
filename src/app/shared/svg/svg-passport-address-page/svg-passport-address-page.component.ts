import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from './../svg-common';

@Component({
	selector: 'app-svg-passport-address-page',
	templateUrl: './svg-passport-address-page.component.svg',
	styleUrls: ['./svg-passport-address-page.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPassportAddressPageComponent extends SvgCommon {
}
