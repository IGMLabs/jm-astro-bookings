import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  public trips$: Observable<Trip[]>;
  public agencies$: Observable<Agency[]>;

  public reloading = false;

  constructor(tripsApi: TripsApi, agenciesApi: AgenciesApi) {
    this.trips$ = tripsApi.getAll$();
    this.agencies$ = agenciesApi.getAll$();
   }

  ngOnInit(): void {
  }

}
