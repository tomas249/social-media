import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user;

  constructor(
    private auth: AuthService,
    private token: TokenService
    ) { }

  ngOnInit() {
    this.user = this.token.getUserData();

  }

  logout() {
    if (confirm('Are you sure you want to close your account?')) {
      // this.token.removeTokens();
      this.auth.logout();
    }
  }

}
