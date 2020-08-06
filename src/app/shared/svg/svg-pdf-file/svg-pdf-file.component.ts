import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from './../svg-common';

@Component({
	selector: 'app-svg-pdf-file',
	templateUrl: './svg-pdf-file.component.svg',
	styleUrls: ['./svg-pdf-file.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPdfFileComponent extends SvgCommon {
}
