import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IEvent} from '../model/IEvent';
import {retry} from 'rxjs/operators';
import {Result} from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  // get all free events
  // @ts-ignore
  public getFreeEvents(): Observable<IEvent[]>{
    const dataURL = `http://127.0.0.1:5000/events/free`;
    return this.httpClient.get<IEvent[]>(dataURL).pipe(
      retry(1)
    );
  }

  // get all pro events
  // @ts-ignore
  public getProEvents(): Observable<IEvent[]>{
    const dataURL = `http://127.0.0.1:5000/events/pro`;
    return this.httpClient.get<IEvent[]>(dataURL).pipe(
      retry(1)
    );
  }

  // Upload events
  // @ts-ignore
  public UploadEvents(event): Observable<Result>{
    const dataURL = `http://127.0.0.1:5000/events/upload`;
    return this.httpClient.post<Result>(dataURL, event).pipe(
      retry(1)
    );
  }
}
