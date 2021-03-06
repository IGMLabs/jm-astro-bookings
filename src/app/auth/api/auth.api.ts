import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from './login.interface';
import { Register } from './register.interface';
import { tap } from 'rxjs';
import { AuthResponse } from './auth-response.interface';
import { StorageBase } from 'src/app/core/utils/storage.base';

@Injectable({
  providedIn: 'root',
})
export class AuthAPI {
  private url = environment.apiUrl;

  public accessToken = '';

  constructor(protected http: HttpClient, private storage: StorageBase){
    this.accessToken = storage.getToken();
  }

  public register$(register: Register) {
    return this.http
      .post<AuthResponse>(this.url + 'auth/registration', register)
      .pipe(tap(response => {
        this.accessToken = response.accessToken
        this.storage.setToken(this.accessToken);
      }));
  }

  public login$(login: Login) {
    return this.http
      .post<AuthResponse>(this.url + 'auth/login', login)
      .pipe(tap(response => {
        this.accessToken = response.accessToken;
        this.storage.setToken(this.accessToken);
      }));
  }
}
