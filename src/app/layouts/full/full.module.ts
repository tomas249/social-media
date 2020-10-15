import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './full.component';

// Guards
import { LoggedInGuard } from 'src/app/guards/logged-in.guard';
import { IsAdminGuard } from 'src/app/guards/is-admin.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: FullComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [LoggedInGuard, IsAdminGuard]
      }
    ]
  }
]

@NgModule({
  declarations: [FullComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FullModule { }
