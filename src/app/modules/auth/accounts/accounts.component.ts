import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TokenService } from 'src/app/services/token.service';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';
import { LocationService } from 'src/app/services/location.service';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  user;
  tokens;
  refreshToken;

  constructor(
    private authService: AuthService,
    private token: TokenService,
    private navbarService: NavbarService,
    private locationService: LocationService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.user = this.token.getUserData();
    this.locationService.setStack(['Accounts']);
    this.onGetAssociated();
  }

  logout() {
    const content = [
      { html: 'Are you sure you want to close your account?' },
      { buttons: [
        { title: 'Accept', close: true, event: true },
        { title: 'Cancel', close: true, event: false }
      ] }
    ];

    const modal = {type: 'default', content};
    const location = {action: 'add', stack: ['Logout confirm']};

    this.modalService.open(modal, location, (closeAccepted) => {
      if (closeAccepted) {
        this.authService.logout().subscribe(
          _ => {
            this.token.removeTokens();
            this.navbarService.go('/explore');
          },
          err => {
            this.token.removeTokens();
            this.navbarService.go('/explore');
          }
        );
      }
    });
  }

  onGetAssociated() {
    this.refreshToken = this.token.getRefreshToken();
    this.authService.getActiveAccounts().subscribe(tokens => {
      this.tokens = tokens;
    })
  }

  onRevoke(token) {
    this.authService.revokeToken(token).subscribe(_ => {
      this.tokens = this.tokens.filter(t => t.token !== token);
    });
  }

}
