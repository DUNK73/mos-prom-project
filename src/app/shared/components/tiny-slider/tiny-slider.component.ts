import { AfterContentInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { TinySliderInstance, TinySliderSettings } from 'tiny-slider';
import { tns } from 'tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-tiny-slider',
  templateUrl: './tiny-slider.component.html',
  styleUrls: ['./tiny-slider.component.less'],
})
export class TinySliderComponent implements AfterContentInit, OnDestroy, OnChanges {

  public slider: TinySliderInstance;

  @Input()
  private sliderConfig: TinySliderSettings;

  @ViewChild('slideItems', { static: true })
  private slideItemsContainerRef: ElementRef;

  private readonly baseSliderSettings: TinySliderSettings = {
    slideBy: 'page',
    axis: 'horizontal',
    nav: true,
    speed: 400,
    autoplayButtonOutput: false,
    touch: true,
    mouseDrag: true,
    lazyload: false,
    freezable: false,
    autoWidth: true,
    controls: false,
    //  onInit  - срабатывает,после иницициализации слайдера
    //  Кто будет использовать, имейте ввиду, что в
    //  customSliderSettings: потенциально может прийти onInit  ""от родителя"
  };

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.changeDetectorRef.detach();
  }


  public ngAfterContentInit() {
    if (this.sliderConfig && this.slideItemsContainerRef.nativeElement.children && this.slideItemsContainerRef.nativeElement.children.length > 1) {
      this.buildSlider();
    }
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['sliderConfig'] && !changes['sliderConfig'].firstChange) {
      this.buildSlider();
    }
  }

  public ngOnDestroy() {
    this.destroySlider();
  }


  private buildSlider(): void {
    this.destroySlider();
    this.createSlider();
  }

  private createSlider(): void {
    const container = this.slideItemsContainerRef.nativeElement;
    const finalSettings = { ...this.getSliderConfig(), container };

    // ... just do it
    let onInit: () => void;
    if (finalSettings.onInit) {
      onInit = finalSettings.onInit;
      finalSettings.onInit = null;
    }
    this.slider = tns(finalSettings);
    this.changeDetectorRef.detectChanges();
    if (onInit) {
      onInit();
    }
  }

  private getSliderConfig(): TinySliderSettings {
    const settings: TinySliderSettings = Object.assign({},
      this.baseSliderSettings,
      this.sliderConfig
    ) as TinySliderSettings;

    return settings;
  }

  private destroySlider(): void {
    if (this.slider && this.slider.destroy) {
      this.slider.destroy();
      this.slider = null;
      this.changeDetectorRef.detectChanges();
    }
  }

}
