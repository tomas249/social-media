import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MainComponent } from './main.component';

// Guards
import { LoggedInGuard } from 'src/app/guards/logged-in.guard';
import { IsAdminGuard } from 'src/app/guards/is-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'notifications',
        loadChildren: () => import('src/app/modules/notifications/notifications.module').then(m => m.NotificationsModule),
        canActivate: [LoggedInGuard]
      },
      {
        path: 'auth',
        loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'u',
        loadChildren: () => import('src/app/modules/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/posts/posts.module').then(m => m.PostsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
