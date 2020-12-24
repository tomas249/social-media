import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService} from '../auth.service';
import { FormGroup, FormControl, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  messageList = [];
  success = false;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
  ) {
    this.registerForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        this.noEmail.bind(this)
      ]],
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
      confirmPassword: ['', [
        Validators.required,
        this.mustMatch.bind(this)
      ]]
    });
  }

  ngOnInit() {
  }

  private noEmail(control: FormControl) {
    const name = control.value;
    if (name && name.indexOf('@') !== -1) {
      return {isEmail: 'yes'};
    }
  }

  private mustMatch(control: FormControl) {
    if (!this.registerForm) return null;
    const password = this.registerForm.value.password;
    const confirmPassword = control.value;
    return password === confirmPassword ? null : {
      mustMatch: 'true'
    };
  }

  errorMessages(field, keyError, extra=null) {
    field = field.charAt(0).toUpperCase() + field.slice(1);
    const message = {
      'required': `${field} field is required`,
      'maxlength': `${field} field max length is ${extra} characters`,
      'minlength': `${field} field min length is ${extra} characters`,
      'mustMatch': `Both passwords must match`,
      'isEmail': `${field} can not contain @`,
      'email': `Enter a valid email`
    };
    return message[keyError] || 
    `Unrecognized validator (Field: ${field}, KeyError: ${keyError})`;
  }

  getFormValidationErrors() {
    this.messageList = [];
    Object.keys(this.registerForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.registerForm.get(key).errors;
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

  onRegister() {
    this.getFormValidationErrors();
    if (this.registerForm.invalid) return;

    const newUser = {
      name: this.registerForm.get('name').value,
      email: this.registerForm.get('email').value.toLowerCase(),
      password: this.registerForm.get('password').value
    }

    this.auth.register(newUser).subscribe(
      res => {
        console.warn(res)
        this.success = res.success;
        this.messageList.push(res.message);
        this.registerForm.reset();
      },
      err => {
        const e = err.error;
        this.success = e.success;
        this.messageList.push(e.message);
      })
  }
}
