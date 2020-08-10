import { Component, OnInit } from '@angular/core';
import { ResolutionsService } from 'src/app/core/services/resolutions.service';
import { ActivatedRoute } from '@angular/router';

import * as Showdown from 'showdown';

@Component({
  selector: 'app-library-detail-page',
  templateUrl: './library-detail-page.component.html',
  styleUrls: ['./library-detail-page.component.less']
})
export class LibraryDetailPageComponent implements OnInit {

  public resolution$ = this.resolutionsService.getResolution(this.activatedRoute.snapshot.params.id)

  constructor(
    private activatedRoute: ActivatedRoute,
    private resolutionsService: ResolutionsService
  ) { }

  ngOnInit() {

  }

  public getHtml(text: string): string {
    const converter = new Showdown.Converter();
    return converter.makeHtml(text);
  }

}
