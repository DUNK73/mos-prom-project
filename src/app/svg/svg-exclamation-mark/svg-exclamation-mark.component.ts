import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-exclamation-mark',
	templateUrl: './svg-exclamation-mark.component.svg',
	styleUrls: ['./svg-exclamation-mark.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgExclamationMarkComponent extends SvgCommon implements AfterViewInit {

	@Input()
	private backgroundColor = '#e7ad42';

	public ngAfterViewInit() {
		super.setStyle('circle', 'fill', this.backgroundColor || '#e7ad42');
	}
}
