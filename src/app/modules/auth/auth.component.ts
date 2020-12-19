import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.loadNav();
  }

  loadNav() {
    const navItems = [
      { name: 'Login', path: '/auth/login' },
      { name: 'Register', path: '/auth/register' }
    ]
    // this.locationService.changeNavItems(navItems);
    // this.locationService.changeRootLoc('Auth');
  }

}
