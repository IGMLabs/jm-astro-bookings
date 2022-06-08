import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips.list.html',
  styleUrls: ['./trips.list.css']
})
export class TripsList implements OnInit {

  public trips: Trip[]


  constructor(private tripsApi: TripsApi) {
    this.trips = tripsApi.getAll();
  }

  ngOnInit(): void {
  }
  public getTripsLength(){
    return this.trips.length;
  }

  public reloading = false;

  public reload(list: string){
    this.reloading = true;
    console.log("Reloading..." + list);
  }

  public getClassForStatus(status: string | undefined){
    if(status === 'Confirmed'){
      return 'green';
    } else return 'orange';
  }
}
