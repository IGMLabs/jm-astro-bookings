import { Component, OnInit } from '@angular/core';

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


  public reloading = false;

  constructor() { }

  ngOnInit(): void {
  }

}
