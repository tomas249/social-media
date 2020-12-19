import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenService } from 'src/app/services/token.service';
import { LocationService } from 'src/app/services/location.service';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user;

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private navbarService: NavbarService
    ) { }

  ngOnInit() {
    this.user = this.token.getUserData();

    // this.locationService.finishComposition();
  }

  logout() {
    if (confirm('Are you sure you want to close your account?')) {
      // this.token.removeTokens();
      this.navbarService.go('/explore');
      this.auth.logout();
    }
  }

}
