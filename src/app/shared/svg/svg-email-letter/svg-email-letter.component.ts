import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-email-letter',
	templateUrl: './svg-email-letter.component.svg',
	styleUrls: ['./svg-email-letter.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgEmailLetterComponent extends SvgCommon { }
