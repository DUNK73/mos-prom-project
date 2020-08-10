import { Resolution, FilterApplicationDeadline } from './../../models/resolution.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SizeOfEnterprise } from '../../models/size-of-enterprise.model';

import { ScopeOfProducts } from '../../models/scope-of-products.model';
import { DataChoice } from '../../models/data-choice.model';
import { SupportMeasures } from '../../models/support-measures.model';
import { GrandAndLoans } from '../../models/grand-and-loans.model';

@Injectable({
  providedIn: 'root'
})
export class ResolutionsService {

  constructor(
    private http: HttpClient
  ) { }

  public getResolutions(): Observable<Array<Resolution>> {
    return this.http.get<Array<Resolution>>('api/navigator/resolutions');
  }

  public getResolution(id): Observable<Resolution> {
    return this.http.get<Resolution>(`api/navigator/resolutions/${id}`);
  }


  public getSizeOfEnterpriseList(): Observable<Array<FilterApplicationDeadline>> {
    return this.http.get<Array<FilterApplicationDeadline>>('api/navigator/size-of-enterprise');
  }

  public getScopeOfProductsList(): Observable<Array<FilterApplicationDeadline>> {
    return this.http.get<Array<FilterApplicationDeadline>>('api/navigator/scope-of-products');
  }

  public getSupportMeasuresList(): Observable<Array<FilterApplicationDeadline>> {
    return this.http.get<Array<FilterApplicationDeadline>>('api/navigator/support-measures');
  }

  public getDataChoiceList(): Observable<Array<FilterApplicationDeadline>> {
    return this.http.get<Array<FilterApplicationDeadline>>('api/navigator/data-choice');
  }

  public getGrandAndLoansList(): Observable<Array<FilterApplicationDeadline>> {
    return this.http.get<Array<FilterApplicationDeadline>>('api/navigator/grand-and-loans');
  }

  public getMoscowOrRfList(): Observable<Array<FilterApplicationDeadline>> {
    return this.http.get<Array<FilterApplicationDeadline>>('api/navigator/production');
  }


}
