import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenService } from 'src/app/services/token.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Input() modalBox: boolean = false;
  @Output() loginResponse = new EventEmitter();

  loginForm: FormGroup;
  responseMessageError;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private locationService: LocationService
  ) {

    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.maxLength(50),
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40)
      ]],
    });
    
  }

  ngOnInit() {
    this.locationService.addChildLocation('Login');
  }

  ngOnDestroy() {
    this.locationService.removeChildLocation();
  }

  onLogin() {
    const email = this.loginForm.get('email').value.toLowerCase();
    let payload = {
      email: email,
      password: this.loginForm.get('password').value
    };

    // Send request to API
    this.auth.login(payload).subscribe(
    res => {
      if (this.modalBox) {
        this.loginResponse.emit({success: true});
      }
      else {
        this.router.navigate(['/']);
      }

    }, err => {
      console.log(err)
      this.responseMessageError = err.error.error;
    });
    
  }
  
}