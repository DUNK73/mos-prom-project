import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-arrow',
	templateUrl: './svg-arrow.component.svg',
	styleUrls: ['./svg-arrow.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SvgArrowComponent extends SvgCommon implements AfterViewInit {

	@Input()
	public fillColor = '#333333';

	public ngAfterViewInit() {
		super.ngAfterViewInit();
		this.setStyle('svg', 'fill', this.fillColor);
	}
}
