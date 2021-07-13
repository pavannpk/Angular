import { Component, OnInit } from '@angular/core';
import {IEvent} from '../../model/IEvent';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-upload-events',
  templateUrl: './upload-events.component.html',
  styleUrls: ['./upload-events.component.css']
})
export class UploadEventsComponent implements OnInit {

  // @ts-ignore
  public isFree: boolean;

  public eventForm: IEvent = {
    name : '',
    image : '',
    price : 0,
    type : '',
    date : '',
    info : '',
  };

  // @ts-ignore
  public errMSG: string;
  // @ts-ignore
  public isAdmin: boolean;
  constructor(private eventService: EventService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.isAdmin = this.userService.isAdmin();
  }

  // select event type
  // tslint:disable-next-line:typedef
  public selectEventType(event: any) {
    this.isFree = (event.target.value === 'FREE');
  }

  // tslint:disable-next-line:typedef
  public submitUpload() {
    this.eventService.UploadEvents(this.eventForm).subscribe((data) => {
      if (this.eventForm.type === 'FREE'){
        this.router.navigate(['/events/free']);
      }
      if (this.eventForm.type === 'PRO') {
        this.router.navigate(['/events/pro']);
      }
    }, (err) => {
      this.errMSG = err;
    });
  }
}
