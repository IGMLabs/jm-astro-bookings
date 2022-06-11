import { Injectable } from '@angular/core';
import { Agency } from './agency.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CrudApi } from './crud.api';

@Injectable({
  providedIn: 'root'
})
export class AgenciesApi extends CrudApi<Agency>{

  constructor(http: HttpClient){
    super(http, 'agencies');
  }
}
