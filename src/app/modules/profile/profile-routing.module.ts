import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {
    path: ':byData',
    redirectTo: ':byData/',
    pathMatch: 'full'
  },
  {
    path: ':byData/:tab',
    component: ProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
