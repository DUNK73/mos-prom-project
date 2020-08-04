import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-keyboard',
	templateUrl: './svg-keyboard.component.svg',
	styleUrls: ['./svg-keyboard.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgKeyboardComponent extends SvgCommon { }
