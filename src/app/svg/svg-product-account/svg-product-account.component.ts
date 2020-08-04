import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-product-account',
	templateUrl: './svg-product-account.component.svg',
	styleUrls: ['./svg-product-account.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgProductAccountComponent extends SvgCommon { }
