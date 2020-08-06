import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-question-circle',
	templateUrl: './svg-question-circle.component.svg',
	styleUrls: ['./svg-question-circle.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgQuestionCircleComponent extends SvgCommon implements AfterViewInit {

	@Input()
	public backgroundColor = '#fff';

	@Input()
	public circleBorderColor = '#84b245';

	@Input()
	public questionColor = '#84b245';


	public ngAfterViewInit() {
		super.ngAfterViewInit();
		this.setCircleStrokeColor();
		this.setElipseFillBackground();
		this.setQuestionStrokeColor();

	}

	private setElipseFillBackground() {
		this.setStyle('ellipse', 'fill', this.backgroundColor);
	}

	private setCircleStrokeColor() {
		this.setStyle('#path1', 'fill', this.circleBorderColor);
	}

	private setQuestionStrokeColor() {
		this.setStyle('#path2', 'fill', this.questionColor);
	}
}
