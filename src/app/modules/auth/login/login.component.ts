import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenService } from 'src/app/services/token.service';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Input() modalBox: boolean = false;
  @Output() loginResponse = new EventEmitter();

  loginForm: FormGroup;
  messageList = [];
  success = false;
  navigateEnd = true;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private locationService: LocationService,
    private modal: ModalService
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
    this.locationService.addChildLoc('Login', {extend:false, parentLoc:'Auth', useNav:true});
  }

  ngOnDestroy() {
    this.locationService.removeChildLoc(true);
  }


  errorMessages(field, keyError, extra=null) {
    field = field.charAt(0).toUpperCase() + field.slice(1);
    const message = {
      'required': `${field} field is required`,
      'maxlength': `${field} field max length is ${extra} characters`,
      'minlength': `${field} field min length is ${extra} characters`,
      'email': `Enter a valid email`
    };
    return message[keyError];
  }

  getFormValidationErrors() {
    this.messageList = [];
    Object.keys(this.loginForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.loginForm.get(key).errors;
      if (controlErrors !== null) {
        Object.keys(controlErrors).forEach(keyError => {
          const length = controlErrors[keyError];
          const extra = (typeof length === 'object') ? length.requiredLength : null;
          const errorMssg = this.errorMessages(key, keyError, extra);
          this.messageList.push(errorMssg);
        });
      }
    });
  }

  onLogin() {
    this.getFormValidationErrors();
    if (this.loginForm.invalid) return;

    let payload = {
      email: this.loginForm.get('email').value.toLowerCase(),
      password: this.loginForm.get('password').value
    };

    // Send request to API
    this.auth.login(payload).subscribe(
    res => {
      this.modal.emitResponse(true);
      if (this.navigateEnd) this.router.navigate(['/']);
    },
    err => {
      this.success = false;
      this.messageList.push(err);
    });
    
  }
  
}