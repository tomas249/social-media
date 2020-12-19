import { NgModule, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountsComponent } from './accounts/accounts.component';

// Modules
import { ModalModule } from 'src/app/shared/modal/modal.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    AuthComponent,
    AccountsComponent
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
    LogoutComponent,
    AccountsComponent
  };

  static menu = {
    root: 'Auth',
    trigger: ['Login', 'Register'],
    children: [
      {
        name: 'Login',
        component: 'Login',
      },
      {
        name: 'Register',
        component: 'Register',
      }
    ]
  }
}
