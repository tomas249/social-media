import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  
  constructor(
    private token: TokenService,
    private router: Router
  ) {}

	canActivate() {
		if (this.token.isLogged()) {
      return true;
    } else {
      // this.router.navigate(['/auth']);
      return false;
		}

	}

}
