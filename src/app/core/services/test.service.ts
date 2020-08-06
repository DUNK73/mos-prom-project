import { Resolution } from './../../models/resolution.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  

}
