import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
  selector: 'app-svg-rsb-logo-text-line-three',
  templateUrl: './svg-rsb-logo-text-line-three.component.svg',
  styleUrls: ['./svg-rsb-logo-text-line-three.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgRsbLogoTextLineThreeComponent extends SvgCommon { }
