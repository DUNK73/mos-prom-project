import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-main-library-main-page',
  templateUrl: './library-main-page.component.html',
  styleUrls: ['./library-main-page.component.less']
})
export class LibraryMainPageComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    option1: new FormControl(),
    option2: new FormControl(),
    option3: new FormControl(),
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
