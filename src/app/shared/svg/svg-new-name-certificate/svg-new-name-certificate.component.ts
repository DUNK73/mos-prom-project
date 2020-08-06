import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from './../svg-common';

@Component({
	selector: 'app-svg-new-name-certificate',
	templateUrl: './svg-new-name-certificate.component.svg',
	styleUrls: ['./svg-new-name-certificate.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgNewNameCertificateComponent extends SvgCommon {
}
