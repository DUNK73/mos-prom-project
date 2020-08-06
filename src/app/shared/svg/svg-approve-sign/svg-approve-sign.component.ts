import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';
;

@Component({
	selector: 'app-svg-approve-sign',
	templateUrl: './svg-approve-sign.component.svg',
	styleUrls: ['./svg-approve-sign.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgApproveSignComponent extends SvgCommon {


}
