import { Component, OnInit } from '@angular/core';
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

  public title = 'Astro Bookings';
  public subtitle = 'Welcome on board';
  public author = 'Juan Moure';
  public authorUrl = 'http://spadejj.com';
  public trips!: Trip[];
  public agencies!: Agency[];



  public reloading = false;

  constructor(tripsApi: TripsApi, agenciesApi: AgenciesApi) {
    this.trips = tripsApi.getAll();
    this.agencies = agenciesApi.getAll();
   }

  ngOnInit(): void {
  }

}
