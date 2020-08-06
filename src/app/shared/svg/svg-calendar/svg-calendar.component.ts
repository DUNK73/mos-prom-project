import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-calendar',
	templateUrl: './svg-calendar.component.svg',
	styleUrls: ['./svg-calendar.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgCalendarComponent extends SvgCommon { }
