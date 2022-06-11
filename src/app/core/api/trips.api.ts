import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CrudApi } from './crud.api';
import { Trip } from './trip.interface';

@Injectable({
  providedIn: 'root'
})
export class TripsApi extends CrudApi<Trip>{
  constructor(http: HttpClient){
    super(http, 'trips');
  }


}
