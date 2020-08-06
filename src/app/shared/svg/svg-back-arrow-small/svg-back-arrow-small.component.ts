import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-back-arrow-small',
	templateUrl: './svg-back-arrow-small.component.svg',
	styleUrls: ['./svg-back-arrow-small.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SvgBackArrowSmallComponent extends SvgCommon implements AfterViewInit {

	@Input()
	public fillColor = '#333333';

	public ngAfterViewInit() {
		super.ngAfterViewInit();
		this.setStyle('svg', 'fill', this.fillColor);
	}
}
