import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserInfoComponent } from './user-info/user-info.component';



@NgModule({
  declarations: [UsersComponent, UserInfoComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
