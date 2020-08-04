import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-rsb-logo-text-line-two',
	templateUrl: './svg-rsb-logo-text-line-two.component.svg',
	styleUrls: ['./svg-rsb-logo-text-line-two.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgRsbLogoTextLineTwoComponent extends SvgCommon implements AfterViewInit {

	@Input()
	public fillColor = '#333';


	public ngAfterViewInit() {
		super.ngAfterViewInit();
		this.setStyle('svg', 'fill', this.fillColor);
	}

}
