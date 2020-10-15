import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { ModalService } from '../shared/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  
  constructor(
    private token: TokenService,
    private router: Router,
    private modal: ModalService
  ) {}

	canActivate() {
		if (this.token.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      // this.modal.addMessage('In order to visit this page, please login');
      // this.modal.open('AuthModule', 'LoginComponent');
      return false;
		}

	}

}
