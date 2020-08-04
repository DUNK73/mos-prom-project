import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from './../svg-common';

@Component({
	selector: 'app-svg-tel-email-transfer',
	templateUrl: './svg-tel-email-transfer.component.svg',
	styleUrls: ['./svg-tel-email-transfer.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTelEmailTransferComponent extends SvgCommon {
}
