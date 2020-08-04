import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from './../svg-common';

@Component({
	selector: 'app-svg-passport-main-page',
	templateUrl: './svg-passport-main-page.component.svg',
	styleUrls: ['./svg-passport-main-page.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPassportMainPageComponent extends SvgCommon {

}
