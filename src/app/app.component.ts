import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegistrationDemo';

  constructor(private router: Router){

  }
}

