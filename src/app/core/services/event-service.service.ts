import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {}

  // constructor() { }
  public functionCallEvent: EventEmitter<void> = new EventEmitter<void>();


}
