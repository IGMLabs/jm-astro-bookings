import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/auth/api/register.interface';
import { AuthAPI } from '../api/auth.api';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {

  constructor(private authApi: AuthAPI, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(register: Register){
    this.authApi.register$(register).subscribe();
  }
}
