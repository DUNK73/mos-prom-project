import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
  selector: 'app-svg-filter',
  templateUrl: './svg-filter.component.svg',
  styleUrls: ['./svg-filter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgFilterComponent extends SvgCommon { }
