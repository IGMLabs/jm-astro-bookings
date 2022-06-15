import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css']
})
export class AgenciesPage implements OnInit {

  //public agencies!: Agency[];
  public agencies$: Observable<Agency[]>
  public error: boolean = false;
  private search$: BehaviorSubject<string> = new BehaviorSubject('');


  constructor(private agenciesApi: AgenciesApi) {
    //this.agenciesApi.getAll$().subscribe(this.suscriptor);

    this.agencies$ = this.search$.pipe(
      // map((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      switchMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      // concatMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      // exhaustMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
    );
  }

  ngOnInit(): void {
  }

  onReload(){
    this.search$.next('');
  }

  onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
    // this.agencies$ = this.agenciesApi.getByText$(searchTerm);
  }
}
