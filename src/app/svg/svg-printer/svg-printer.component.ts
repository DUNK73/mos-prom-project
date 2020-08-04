import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-printer',
	templateUrl: './svg-printer.component.svg',
	styleUrls: ['./svg-printer.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgPrinterComponent extends SvgCommon { }
