import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-default-userpic',
	templateUrl: './svg-default-userpic.component.svg',
	styleUrls: ['./svg-default-userpic.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SvgDefaultUserpicComponent extends SvgCommon implements AfterViewInit {

	@Input()
	public fillColor = '#797979';

	public ngAfterViewInit() {
		super.ngAfterViewInit();
		this.setStyle('svg', 'fill', this.fillColor);
	}
}
