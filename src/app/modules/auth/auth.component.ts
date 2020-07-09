import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  location = 'Auth';
  navItems = [
    {
      name: 'Login',
      path: 'login'
    },
    {
      name: 'Register',
      path: 'register'
    }
  ];

  @Input() modalBoxM: boolean = false;
  @Output() loginResponseM = new EventEmitter();

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.locationService.changeLocation(this.location, this.navItems);
  }

  sendLoginResponse(event) {
    this.loginResponseM.emit(event);
  }

}
