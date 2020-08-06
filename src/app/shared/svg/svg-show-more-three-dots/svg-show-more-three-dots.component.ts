import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-show-more-three-dots',
	templateUrl: './svg-show-more-three-dots.component.svg',
	styleUrls: ['./svg-show-more-three-dots.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgShowMoreThreeDotsComponent extends SvgCommon { }
