import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { ModalService } from '../shared/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  
  constructor(
    private token: TokenService,
    private router: Router,
    private modal: ModalService
  ) {}

	canActivate() {
		if (this.token.isLogged()) {
      return true;
    } else {
      if (!this.router.navigated) {
        this.router.navigate(['/explore']);
      }
      return false;
		}

	}

}
