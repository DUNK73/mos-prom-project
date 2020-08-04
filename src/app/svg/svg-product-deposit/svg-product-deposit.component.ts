import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
  selector: 'app-svg-product-deposit',
  templateUrl: './svg-product-deposit.component.svg',
  styleUrls: ['./svg-product-deposit.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgProductDepositComponent extends SvgCommon { }
