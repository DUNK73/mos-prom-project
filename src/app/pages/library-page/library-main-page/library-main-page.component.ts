import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-library-main-page',
  templateUrl: './library-main-page.component.html',
  styleUrls: ['./library-main-page.component.less']
})
export class LibraryMainPageComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    inMoscom: new FormControl(),
    exported: new FormControl(),
    smallEnterprise: new FormControl(),
    option4: new FormControl(),

    checkbox1: new FormControl(),
    checkbox2: new FormControl(),
    checkbox3: new FormControl(),
    checkbox4: new FormControl(),
    checkbox5: new FormControl(),
  });


  constructor() { }

  ngOnInit() {
  }

}
