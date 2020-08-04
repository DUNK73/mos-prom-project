import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
	selector: 'app-svg-backspace',
	templateUrl: './svg-backspace.component.svg',
	styleUrls: ['./svg-backspace.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBackspaceComponent extends SvgCommon implements AfterViewInit {

	@Input()
	public height: string = '20px';

	@Input()
	public fillColor: string = '#525151';


	public ngAfterViewInit(): void {
		super.ngAfterViewInit();
		this.setFillColor();
	}

	private setFillColor(): void {
		this.setStyle('svg', 'fill', this.fillColor);
	}
}
