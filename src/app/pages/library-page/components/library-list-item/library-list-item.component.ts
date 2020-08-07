import { Component, OnInit, Input } from '@angular/core';
import { Resolution } from 'src/app/models/resolution.model';

@Component({
  selector: 'app-library-list-item',
  templateUrl: './library-list-item.component.html',
  styleUrls: ['./library-list-item.component.less']
})
export class LibraryListItemComponent implements OnInit {

  @Input()
  public entity: Resolution;

  constructor() { }

  ngOnInit() {
  }

}
