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
    autoHeight: false,
    autoWidth: false,
    // nav: true,
    controls: true,
    loop: false,
  };

  constructor() { }

  ngOnInit() {
  }

}
