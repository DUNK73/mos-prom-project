import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-fast-payments',
	templateUrl: './svg-fast-payments.component.svg',
	styleUrls: ['./svg-fast-payments.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFastPaymentsComponent extends SvgCommon {
}
