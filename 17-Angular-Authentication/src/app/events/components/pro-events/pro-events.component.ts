import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {IEvent} from '../../model/IEvent';

@Component({
  selector: 'app-pro-events',
  templateUrl: './pro-events.component.html',
  styleUrls: ['./pro-events.component.css']
})
export class ProEventsComponent implements OnInit {

  public events: IEvent[] = [];
  // @ts-ignore
  public errMSG: string;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getProEvents().subscribe((data) => {
      this.events = data;
    }, (err) => {
      this.errMSG = err;
    });
  }

}
