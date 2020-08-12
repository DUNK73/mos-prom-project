import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../core/services/events.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list-page',
  templateUrl: './events-list-page.component.html',
  styleUrls: ['./events-list-page.component.less']
})
export class EventsListPageComponent implements OnInit {

  public events$ = this.eventsService.getEvents();

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate([], {});
    this.eventsService.getEvents()
      .subscribe();
  }

}
