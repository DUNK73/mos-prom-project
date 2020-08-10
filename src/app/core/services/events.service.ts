import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private http: HttpClient
  ) { }

  public getEvents(): Observable<Array<Event>> {
    return this.http.get<Array<Event>>('api/events/events');
  }
}
