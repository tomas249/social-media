import { Component, OnInit, ɵConsole, OnDestroy } from '@angular/core';
import { AuthService} from '../auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public registerForm: FormGroup;
  responseMessage;
  responseMessageError;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private locationService: LocationService
  ) {
    this.registerForm = this.fb.group({
      username: ['', [
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
      ]]
    }, {
      validators: this.mustMatch.bind(this)
    });
  }



  ngOnInit() {
    this.locationService.addChildLocation('Register');
  }

  ngOnDestroy() {
    this.locationService.removeChildLocation();
  }

  private noEmail(control: FormControl) {
    const username = control.value;
    if (username && username.indexOf('@') !== -1) {
      return {isEmail: 'yes'};
    }
  }

  private mustMatch(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : {
      mustMatch: 'true'
    };
  }


  onRegister() {
    if (this.registerForm.invalid) return;

    // Clean previous data
    this.responseMessage = null;
    this.responseMessageError = null;

    const newUser = {
      name: this.registerForm.get('username').value,
      email: this.registerForm.get('email').value.toLowerCase(),
      password: this.registerForm.get('password').value
    }

    this.auth.register(newUser).subscribe(
      res => {
        this.responseMessage = res.message;
        this.registerForm.reset();
      },
      err => {
        this.responseMessageError = err.error.error;
      })
  }
}
