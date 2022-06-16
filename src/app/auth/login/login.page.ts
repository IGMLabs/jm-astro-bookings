import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/auth/api/login.interface';
import { AuthAPI } from '../api/auth.api';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  constructor(private authApi: AuthAPI) { }

  ngOnInit(): void {
  }

  onLogin(login: Login){
    this.authApi.login$(login).subscribe();
  }
}
