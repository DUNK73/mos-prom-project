import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-document-one-list',
	templateUrl: './svg-document-one-list.component.svg',
	styleUrls: ['./svg-document-one-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgDocumentOneListComponent extends SvgCommon { }
