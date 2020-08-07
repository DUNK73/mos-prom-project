import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap, map } from 'rxjs/operators';
import { ResolutionsFilter, ResolutionsFilterAdvanced } from '../models/resolutions-filter';
import { ResolutionsService } from '../../../core/services/test.service';
import { Resolution, FilterApplicationDeadline } from '../../../models/resolution.model';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { GrandAndLoans } from '../../../models/grand-and-loans.model';

@Component({
  selector: 'app-library-list-page',
  templateUrl: './library-list-page.component.html',
  styleUrls: ['./library-list-page.component.less']
})
export class LibraryListPageComponent implements OnInit {

  public resolutions: Array<Resolution> = [];
  public resolutionsFiltered: Array<Resolution> = [];

  public form = new FormGroup({
    scopeOfProducts: new FormControl(),
    dataChoice: new FormArray([]),
    grandAndLoans: new FormArray([]),
  });

  public sizeOfEnterpriseList$ = this.resolutionsService.getSizeOfEnterpriseList();
  public scopeOfProductsList$ = this.resolutionsService.getScopeOfProductsList();
  public dataChoiceList$ = this.resolutionsService.getDataChoiceList()
    .pipe(
      tap(x => {
        this.initFormArray(this.form, 'dataChoice', x);
      })
    );
  public supportMeasuresList$ = this.resolutionsService.getSupportMeasuresList();
  public grandAndLoansList$ = this.resolutionsService.getGrandAndLoansList()
    .pipe(
      tap(x => {
        this.initFormArray(this.form, 'grandAndLoans', x);
      })
    );

  private initFormArray(form: FormGroup, field: string, list: Array<FilterApplicationDeadline>): void {
    list.forEach(item => {

      const control = new FormControl();
      control.valueChanges
        .pipe(
          tap(value => {
            if (value) {
              control.setValue(item.id, { emitEvent: false });
            }
          })
        )
        .subscribe();

      const formArray = (form.controls[field] as FormArray);
      formArray.push(control);
    });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private resolutionsService: ResolutionsService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .pipe(
        map((filterParameters: ResolutionsFilter) => {
          const filter: ResolutionsFilter = {};
          filter.exported = new Boolean(filterParameters.exported).valueOf();
          filter.inMoscom = new Boolean(filterParameters.inMoscom).valueOf();
          filter.smallEnterprise = new Boolean(filterParameters.smallEnterprise).valueOf();
          return filter;
        }),
        switchMap((filter: ResolutionsFilter) => {
          return this.resolutionsService.getResolutions()
            .pipe(
              map((data: Array<Resolution>) => {
                return data.filter(f => {
                  return f.exported === filter.exported;
                });
              })
            );
        }),
        tap(data => {
          this.resolutions = data;
          this.resolutionsFiltered = data;
        })

      )
      .subscribe();


    this.form
      .valueChanges
      .pipe(
        tap((filter: ResolutionsFilterAdvanced) => {

          let resolutions = [...this.resolutions];

          if (filter.scopeOfProducts) {
            resolutions = resolutions.filter(item => {
              return item.scope_product_export.id === filter.scopeOfProducts;
            });
          }

          if (filter.grandAndLoans.filter(x => !!x).length) {
            resolutions = resolutions.filter(item =>
              filter.grandAndLoans
                .find((id: number) => id === (item && item.grants_and_loands && item.grants_and_loands.id)));
          }

          this.resolutionsFiltered = resolutions;
        })
      )
      .subscribe();
  }

}
