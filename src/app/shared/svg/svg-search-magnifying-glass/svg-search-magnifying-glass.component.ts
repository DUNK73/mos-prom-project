import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-search-magnifying-glass',
	templateUrl: './svg-search-magnifying-glass.component.svg',
	styleUrls: ['./svg-search-magnifying-glass.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgSearchMagnifyingGlassComponent extends SvgCommon { }
