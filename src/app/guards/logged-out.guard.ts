import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {
  
  constructor(
    private token: TokenService,
		private location: Location,
		private router: Router,
		private activatedRoute: ActivatedRoute
  ) {}

	canActivate() {
		
		if (this.token.isLogged()) {
			return false;
		} else {
			return true;
		}

	}

}
