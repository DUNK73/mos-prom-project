import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TinySliderSettings } from 'tiny-slider';
import { TestService } from '../../core/services/test.service';
import { tap } from 'rxjs/operators';
import { Resolution } from 'src/app/models/resolution.model';
import { TinySliderComponent } from '../../shared/components/tiny-slider/tiny-slider.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {

  public adSliderSettings: TinySliderSettings = {
    // // mode: 'gallery',
    // autoplay: false,
    // autoHeight: true,
    // autoWidth: false,
    // // nav: true,
    // controls: true,
    // loop: false,
    // // gutter: 10,
    // // edgePadding: 25,
    // // gutter: 28,
    // items: 3,
    // controlsContainer: `.slider-block__controls-container`,
    // responsive: {
    //   768: {
    //     items: 2,
    //     // edgePadding: 21,
    //     // gutter: 22,
    //   },
    // }


    slideBy: 'page',
    items: 1,
    nav: true,
    speed: 400,
    autoplayButtonOutput: false,
    loop: true,
    touch: true,
    mouseDrag: true,
    lazyload: false,
    rewind: true,
    freezable: false,
    autoWidth: false,
    controls: true,
    // controlsContainer: this.carouselControls,
    controlsContainer: `.slider-block__controls-container`,
    responsive: {
      550: {
        items: 2,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 2,
      },
      1440: {
        items: 3,
      },
    },
  };

  public resolutions: Array<Resolution> = [];

  @ViewChild(TinySliderComponent)
  public tinySliderComponent: TinySliderComponent;

  constructor(
    private testService: TestService,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.testService.getResolutions()
      .pipe(
        tap(data => {
          this.resolutions = data;
          this.changeDetectorRef.detectChanges();
          this.tinySliderComponent.ngAfterContentInit();
        })
      )
      .subscribe();
  }

}
