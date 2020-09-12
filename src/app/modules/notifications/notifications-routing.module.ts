import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { NotificationsListComponent } from './notifications-list/notifications-list.component';

const routes: Routes = [
  { path: ':notificationsFilter', component: NotificationsListComponent },
  // { path: 'all', component: NotificationsListComponent },
  // { path: 'unread', component: NotificationsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
