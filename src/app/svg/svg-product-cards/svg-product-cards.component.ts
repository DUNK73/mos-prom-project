import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-product-cards',
	templateUrl: './svg-product-cards.component.svg',
	styleUrls: ['./svg-product-cards.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgProductCardsComponent extends SvgCommon { }
