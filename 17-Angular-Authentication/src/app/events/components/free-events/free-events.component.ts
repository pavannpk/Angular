import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {IEvent} from '../../model/IEvent';

@Component({
  selector: 'app-free-events',
  templateUrl: './free-events.component.html',
  styleUrls: ['./free-events.component.css']
})
export class FreeEventsComponent implements OnInit {

  // @ts-ignore
  public events: IEvent[] = [];
  // @ts-ignore
  public errorMSG: string;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getFreeEvents().subscribe((data) => {
      this.events = data;
    }, (err) => {
      this.errorMSG = err;
    });
  }

}
