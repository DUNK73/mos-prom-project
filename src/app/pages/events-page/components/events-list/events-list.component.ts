import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../../../models/events.model';
import { EventsService } from '../../../../core/services/events.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsListComponent implements OnInit {

  @Input()
  public list$: Observable<Array<Event>> = this.eventsService.events$;

  constructor(
    private router: Router,
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    // alert(this.router.getCurrentNavigation().extras.state);
  }

}
