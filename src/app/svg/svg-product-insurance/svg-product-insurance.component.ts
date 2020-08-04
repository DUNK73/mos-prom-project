import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
  selector: 'app-svg-product-insurance',
  templateUrl: './svg-product-insurance.component.svg',
  styleUrls: ['./svg-product-insurance.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgProductInsuranceComponent extends SvgCommon { }
