import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Event } from '../../models/events.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events$$: Subject<Array<Event>> = new Subject();
  public events$: Observable<Array<Event>> = this.events$$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  public getEvents(): Observable<Array<Event>> {
    return this.http.get<Array<Event>>('api/events/events')
      .pipe(
        tap(data => {
          this.events$$.next(data);
        })
      );
  }
}
