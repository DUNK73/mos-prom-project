import { Component, OnInit } from '@angular/core';
import { TinySliderSettings } from 'tiny-slider';
import { TestService } from '../../services/test.service';
import { tap } from 'rxjs/operators';
import { Resolution } from 'src/app/models/resolution.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
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

  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.testService.getResolutions()
      .pipe(
        tap(data => {
          this.resolutions = data;
        })
      )
      .subscribe();
  }

}
