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

    loop: false,
    responsive: {
      350: {
        items: 2
      },
      500: {
        items: 3
      }
    },
    swipeAngle: false,
    speed: 400

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
