import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-app-store',
	templateUrl: './svg-app-store.component.svg',
	styleUrls: ['./svg-app-store.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgAppStoreComponent extends SvgCommon { }
