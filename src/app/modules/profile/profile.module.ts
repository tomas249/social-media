import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UsersListComponent } from './users-list/users-list.component';

import { PostsModule } from '../posts/posts.module';

@NgModule({
  declarations: [ProfileCardComponent, ProfilePageComponent, UsersListComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    PostsModule,
  ]
})
export class ProfileModule {
  static components = {
    ProfileCardComponent,
    UsersListComponent
  }
}
