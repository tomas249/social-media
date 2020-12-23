import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenService } from 'src/app/services/token.service';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  user;

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private navbarService: NavbarService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.user = this.token.getUserData();
    this.locationService.setStack(['Accounts']);
  }

  logout() {
    if (confirm('Are you sure you want to close your account?')) {
      this.token.removeTokens();
      this.navbarService.go('/explore');
      this.auth.logout();
    }
  }

}
