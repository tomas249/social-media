import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';

import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    NotificationsListComponent,
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    PipesModule
  ],
})
export class NotificationsModule { }
