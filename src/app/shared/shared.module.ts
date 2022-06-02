import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './reloading/reloading.component';
import { AgenciesList } from './components/agencies/agencies.list';
import { TripsList } from './components/trips/trips.list';



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesList,
    TripsList
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReloadingComponent,
    AgenciesList,
    TripsList
  ]
})
export class SharedModule { }
