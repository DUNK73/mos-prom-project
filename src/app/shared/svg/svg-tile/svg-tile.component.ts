import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
  selector: 'app-svg-tile',
  templateUrl: './svg-tile.component.svg',
  styleUrls: ['./svg-tile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTileComponent extends SvgCommon { }
