import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { SvgCommonModule } from './svg/svg-common.module';


@NgModule({
  declarations: [

  ],
  imports: [
    SvgCommonModule,
    ComponentsModule,
  ],
  exports: [
    SvgCommonModule,
    ComponentsModule,
  ],
  providers: [

  ]
})
export class SharedModule { }
