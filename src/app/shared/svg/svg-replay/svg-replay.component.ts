import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
  selector: 'app-svg-replay',
  templateUrl: './svg-replay.component.svg',
  styleUrls: ['./svg-replay.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgReplayComponent extends SvgCommon { }
