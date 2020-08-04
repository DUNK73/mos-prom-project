import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgCommon } from '../svg-common';

@Component({
  selector: 'app-svg-upload-file',
  templateUrl: './svg-upload-file.component.svg',
  styleUrls: ['./svg-upload-file.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SvgUploadFileComponent extends SvgCommon { }
