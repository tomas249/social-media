import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { AccountsComponent } from './accounts/accounts.component';

// Guards
import { LoggedInGuard } from 'src/app/guards/logged-in.guard'
import { LoggedOutGuard } from 'src/app/guards/logged-out.guard'

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { 
        path: 'login',
        component: LoginComponent,
        canActivate: [LoggedOutGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoggedOutGuard],
      },
      {
        path: 'accounts', 
        component: AccountsComponent,
        canActivate: [LoggedInGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
