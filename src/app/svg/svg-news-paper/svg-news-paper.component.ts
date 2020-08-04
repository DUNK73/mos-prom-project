import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-news-paper',
	templateUrl: './svg-news-paper.component.svg',
	styleUrls: ['./svg-news-paper.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgNewsPaperComponent extends SvgCommon implements AfterViewInit {

	@Input()
	public fillColor = '#333333';

	public ngAfterViewInit() {
		super.ngAfterViewInit();
		this.setStyle('svg', 'fill', this.fillColor);
	}
}
