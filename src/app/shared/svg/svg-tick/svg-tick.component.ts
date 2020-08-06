import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgCommon } from './../svg-common';

@Component({
	selector: 'app-svg-tick',
	templateUrl: './svg-tick.component.svg',
	styleUrls: ['./svg-tick.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTickComponent extends SvgCommon implements AfterViewInit {

	@Input()
	public strokeColor: string = '#84b245';

	public ngAfterViewInit(): void {
		super.ngAfterViewInit();
		this.setStyle('.svg-tick__polyline', 'stroke', this.strokeColor);
	}

}
