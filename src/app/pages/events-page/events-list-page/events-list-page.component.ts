import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../core/services/events.service';

@Component({
  selector: 'app-events-list-page',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.less']
})
export class EventsListPageComponent implements OnInit {

  public events$ = this.eventsService.getEvents();

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
  }

}
