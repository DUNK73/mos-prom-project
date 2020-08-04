import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-default-star',
	templateUrl: './svg-default-star.component.svg',
	styleUrls: ['./svg-default-star.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SvgDefaultStarComponent extends SvgCommon implements AfterViewInit {

	@Input()
	public fillColor = '#333333';


	public ngAfterViewInit() {
		super.ngAfterViewInit();
		this.setStyle('svg', 'fill', this.fillColor);
	}

}
