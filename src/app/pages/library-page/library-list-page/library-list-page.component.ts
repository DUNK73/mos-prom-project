import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap, filter } from 'rxjs/operators';
import { ResolutionsService } from '../../../core/services/resolutions.service';
import { FilterApplicationDeadline, Resolution } from '../../../models/resolution.model';
import { ResolutionsFilter, ResolutionsFilterAdvanced } from '../models/resolutions-filter';

@Component({
  selector: 'app-library-list-page',
  templateUrl: './library-list-page.component.html',
  styleUrls: ['./library-list-page.component.less']
})
export class LibraryListPageComponent implements OnInit {

  public resolutions: Array<Resolution> = [];
  public resolutionsFiltered: Array<Resolution> = [];

  private filter: ResolutionsFilterAdvanced;

  public form = new FormGroup({
    exported: new FormControl(),

    moscowOrRf: new FormArray([]),
    supportMeasures: new FormArray([]),
    sizeOfEnterprise: new FormArray([]),
    scopeOfProducts: new FormArray([]),
    dataChoice: new FormArray([]),
    grandAndLoans: new FormArray([]),

    searchText: new FormControl(),
  });

  public sizeOfEnterpriseList$ = this.resolutionsService.getSizeOfEnterpriseList()
    .pipe(
      tap(x => {
        this.initFormArray(this.form, 'sizeOfEnterprise', x);
      })
    );
  public scopeOfProductsList$ = this.resolutionsService.getScopeOfProductsList()
    .pipe(
      tap(x => {
        this.initFormArray(this.form, 'scopeOfProducts', x);
      })
    );
  public dataChoiceList$ = this.resolutionsService.getDataChoiceList()
    .pipe(
      tap(x => {
        this.initFormArray(this.form, 'dataChoice', x);
      })
    );
  public supportMeasuresList$ = this.resolutionsService.getSupportMeasuresList()
    .pipe(
      tap(x => {
        this.initFormArray(this.form, 'supportMeasures', x);
      })
    );
  public grandAndLoansList$ = this.resolutionsService.getGrandAndLoansList()
    .pipe(
      tap(x => {
        this.initFormArray(this.form, 'grandAndLoans', x);
      })
    );


  private initFormArray(form: FormGroup, field: string, list: Array<FilterApplicationDeadline>): void {
    list.forEach(item => {

      const control = new FormControl();

      const formArray = (form.controls[field] as FormArray);
      formArray.push(control);

      if (this.filter) {
        this.form.patchValue(this.filter, { emitEvent: false });
      }
    });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private resolutionsService: ResolutionsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .pipe(
        filter(x => !this.filter),
        map(x => {

          const filter: ResolutionsFilterAdvanced = {

            searchText: x.get('searchText'),

            // tslint:disable-next-line: no-construct
            exported: x.get('exported') === null ? null : new Boolean(x.get('exported')).valueOf(),

            moscowOrRf: x.getAll('moscowOrRf').map(item => +item),
            sizeOfEnterprise: x.getAll('sizeOfEnterprise').map(item => +item),
            supportMeasures: x.getAll('supportMeasures').map(item => +item),
            scopeOfProducts: x.getAll('scopeOfProducts').map(item => +item),
            dataChoice: x.getAll('dataChoice').map(item => +item),
            grandAndLoans: x.getAll('grandAndLoans').map(item => +item),
          };

          this.form.patchValue(filter);

          this.filter = filter;

          return filter;
        }),
        switchMap((filter: ResolutionsFilter) => {
          return this.resolutionsService.getResolutions()
            .pipe(
              tap((data: Array<Resolution>) => {

                this.resolutions = data;
                this.resolutionsFiltered = this.filtering(this.resolutions, filter);

              })
            );
        })
      )
      .subscribe();


    this.form
      .valueChanges
      .pipe(
        tap((filter: ResolutionsFilterAdvanced) => {
          if (this.resolutions?.length) {
            this.resolutionsFiltered = this.filtering(this.resolutions, filter);
            this.router.navigate([], { queryParams: filter });
          }
        })
      )
      .subscribe();
  }

  private filtering(resolutionsToFiltering: Array<Resolution>, filter: ResolutionsFilterAdvanced): Array<Resolution> {

    let resolutions = [...resolutionsToFiltering];

    if (!filter) {
      return resolutions;
    }

    if (filter.exported !== null && filter.exported !== undefined) {
      resolutions = resolutions.filter(item => item.exported === filter.exported);
    }

    if (filter.moscowOrRf?.filter(x => !!x).length) {
      resolutions = resolutions.filter(item =>
        filter.moscowOrRf
          .find((id: number) => +id === (item && item.moscow_or_rf && item.moscow_or_rf.id)));
    }
    if (filter.sizeOfEnterprise?.filter(x => !!x).length) {
      resolutions = resolutions.filter(item =>
        filter.sizeOfEnterprise
          .find((id: number) => +id === (item && item.size_of_enterprise && item.size_of_enterprise.id)));
    }
    // if (filter.supportMeasures.filter(x => !!x).length) {
    //   resolutions = resolutions.filter(item =>
    //     filter.supportMeasures
    //       .find((id: number) => +id === (item && item.support_measures && item.support_measures.id)));
    // }
    if (filter.scopeOfProducts?.filter(x => !!x).length) {
      resolutions = resolutions.filter(item =>
        filter.scopeOfProducts
          .find((id: number) => +id === (item && item.scope_product_export && item.scope_product_export.id)));
    }
    if (filter.dataChoice?.filter(x => !!x).length) {
      resolutions = resolutions.filter(item =>
        filter.dataChoice
          .find((id: number) => +id === (item && item.filter_application_deadline && item.filter_application_deadline.id)));
    }
    if (filter.grandAndLoans?.filter(x => !!x).length) {
      resolutions = resolutions.filter(item =>
        filter.grandAndLoans
          .find((id: number) => +id === (item && item.grants_and_loands && item.grants_and_loands.id)));
    }

    if (filter.searchText) {
      resolutions = resolutions.filter(item => {
        let s = JSON.stringify(item).search(filter.searchText);
        return s > 0;
      });
    }

    return resolutions;
  }

}
