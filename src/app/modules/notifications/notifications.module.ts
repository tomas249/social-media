import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';
import { NotificationsComponent } from './notifications.component';

import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    NotificationsListComponent,
    NotificationsComponent,
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    PipesModule
  ],
  exports: [NotificationsComponent]
})
export class NotificationsModule { }
