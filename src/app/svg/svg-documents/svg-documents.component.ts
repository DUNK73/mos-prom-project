import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-documents',
	templateUrl: './svg-documents.component.svg',
	styleUrls: ['./svg-documents.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgDocumentsComponent extends SvgCommon { }
