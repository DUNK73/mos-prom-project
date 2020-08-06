import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-deposit-insurance-system',
	templateUrl: './svg-deposit-insurance-system.component.svg',
	styleUrls: ['./svg-deposit-insurance-system.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgDepositInsuranceSystemComponent extends SvgCommon { }
