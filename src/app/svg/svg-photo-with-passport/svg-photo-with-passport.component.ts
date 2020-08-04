import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from './../svg-common';

@Component({
	selector: 'app-svg-photo-with-passport',
	templateUrl: './svg-photo-with-passport.component.svg',
	styleUrls: ['./svg-photo-with-passport.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPhotoWithPassportComponent extends SvgCommon {

}
