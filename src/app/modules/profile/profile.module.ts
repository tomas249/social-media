import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes: Routes = [
  {
    path: ':username',
    component: ProfilePageComponent
  },
  {
    path: ':username/:tab',
    component: ProfilePageComponent
  }
]

@NgModule({
  declarations: [ProfileCardComponent, ProfilePageComponent, UsersListComponent, UserEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProfileCardComponent
  ]
})
export class ProfileModule {
  static components = {
    ProfileCardComponent,
    UsersListComponent,
    UserEditComponent
  }
}
