import { Component, OnInit } from '@angular/core';
import { TinySliderSettings } from 'tiny-slider';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  public adSliderSettings: TinySliderSettings = {
    mode: 'gallery',
    autoplay: false,
    autoHeight: true,
    autoWidth: false,
    // nav: true,
    controls: true,
    loop: false,
    // gutter: 10,
    // edgePadding: 25,
    // gutter: 28,
    controlsContainer: `.slider-block__controls-container`,
    responsive: {
      768: {
        items: 2,
        // edgePadding: 21,
        // gutter: 22,
      },
    }

  };

  constructor() { }

  ngOnInit() {
  }

}
