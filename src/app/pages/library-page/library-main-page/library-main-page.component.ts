import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { tap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { ResolutionsService } from 'src/app/core/services/resolutions.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-main-library-main-page',
  templateUrl: './library-main-page.component.html',
  styleUrls: ['./library-main-page.component.less']
})
export class LibraryMainPageComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    exported: new FormControl(),

    moscowOrRf: new FormControl(),
    sizeOfEnterprise: new FormControl(),
    supportMeasures: new FormControl(),
    scopeOfProducts: new FormControl(),
    dataChoice: new FormControl(),
    grandAndLoans: new FormControl(),
  });

  public sizeOfEnterpriseList$ = this.resolutionsService.getSizeOfEnterpriseList()
    .pipe(
      map(x => {
        return x.map(element => {

          let title: string;

          if (element.short_description === 'МСП') {
            title = 'Да';
          }
          if (element.short_description === 'Остальные') {
            title = 'Нет';
          }

          return { value: element.id, title: title };
        });
      })
    );
  public moscowOrRfList$ = this.resolutionsService.getMoscowOrRfList()
    .pipe(
      map(x => {
        return x.map(element => {

          let title: string;

          if (element.short_description === 'МСК') {
            title = 'Да';
          }
          if (element.short_description === 'РФ') {
            title = 'Нет';
          }

          return { value: element.id, title: title };
        });
      })
    );

  public exportedList$ = of([
    { value: true, title: 'Да' },
    { value: false, title: 'Нет' }
  ]);

  public scopeOfProductsList$ = this.resolutionsService.getScopeOfProductsList()
    .pipe(
      map(x => {
        return x.map(element => {

          let title: string;

          if (element.short_description === 'ПК') {
            title = 'Промышленный комплекс';
          }
          if (element.short_description === 'АПК') {
            title = 'Агропромышленный комплекс';
          }

          return { value: element.id, title: title };
        });
      }),
      map(x => {
        x.push({ value: null, title: 'Другое' });
        return x;
      })
    );


  constructor(
    private activatedRoute: ActivatedRoute,
    private resolutionsService: ResolutionsService,
  ) { }

  ngOnInit() {
  }

}
