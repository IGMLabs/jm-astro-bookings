import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadingComponent } from './reloading/reloading.component';
import { AgenciesList } from './components/agencies/agencies.list';
import { TripsList } from './components/trips/trips.list';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ReloadingComponent,
    AgenciesList,
    TripsList
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ReloadingComponent,
    AgenciesList,
    TripsList,
    RouterModule
  ]
})
export class SharedModule { }
