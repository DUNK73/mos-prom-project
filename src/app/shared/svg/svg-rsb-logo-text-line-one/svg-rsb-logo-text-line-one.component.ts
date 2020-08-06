import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
  selector: 'app-svg-rsb-logo-text-line-one',
  templateUrl: './svg-rsb-logo-text-line-one.component.svg',
  styleUrls: ['./svg-rsb-logo-text-line-one.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgRsbLogoTextLineOneComponent extends SvgCommon { }
