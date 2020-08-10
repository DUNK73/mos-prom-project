import { Component, OnInit, ElementRef, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import * as Showdown from 'showdown';

@Component({
  selector: 'app-markdown-viewer',
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownViewerComponent implements OnInit {

  @Input()
  public text: string;

  public htmlText: string;

  private converter = new Showdown.Converter();

  constructor(
    private elementRef: ElementRef
  ) { }


  ngOnInit() {
    let p = this.elementRef;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text'] && changes['text'].currentValue) {
      this.htmlText = this.converter.makeHtml(this.text);
    }

  }

}
