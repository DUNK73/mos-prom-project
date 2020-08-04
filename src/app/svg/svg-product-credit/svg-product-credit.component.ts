import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
  selector: 'app-svg-product-credit',
  templateUrl: './svg-product-credit.component.svg',
  styleUrls: ['./svg-product-credit.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgProductCreditComponent extends SvgCommon { }
