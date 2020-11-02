import { NgModule, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

import { ModalModule } from 'src/app/shared/modal/modal.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ]
})
export class AuthModule {
  static components = {
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  };

  static list = {
    root: 'Auth',
    children: [
      { name: 'Login', component: 'LoginComponent', modalOrigin: 'default' },
      { name: 'Register', component: 'RegisterComponent', modalOrigin: 'default' }
    ]
  }
}
