import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from 'src/app/guards/auth.guard';
// import { NoAuthGuard } from 'src/app/guards/no-auth.guard';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { LogoutComponent } from './logout/logout.component';

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
        canActivate: [LoggedOutGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoggedOutGuard]
      },
      {
        path: 'accounts', 
        component: LogoutComponent,
        canActivate: [LoggedInGuard]
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
