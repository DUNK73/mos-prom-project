import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-product-investments',
	templateUrl: './svg-product-investments.component.svg',
	styleUrls: ['./svg-product-investments.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgProductInvestmentsComponent extends SvgCommon { }
