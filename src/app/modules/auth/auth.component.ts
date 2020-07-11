import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';


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

  constructor(
    private locationService: LocationService,
    private token: TokenService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const items = this.token.isLogged() ? [] : this.navItems;
    this.locationService.changeLocation(this.location, items);
  }

}
