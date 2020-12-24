import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {

  isLogged = false;
  notificationsList;
  notificationsCount = 2;
  notificationsFilter;

  constructor(
    private notifications: NotificationsService,
    private route: ActivatedRoute,
    private navbarService: NavbarService
  ) { }

  ngOnInit(): void {
    this.notificationsFilter = this.route.snapshot.data['filter'];

    this.notifications.getNotifications(this.notificationsFilter === 'unread').subscribe(res => {
      this.notificationsList = res.reverse();
    });
  }

  markAsRead(notification) {
    if (this.notificationsFilter === 'all') {
      notification.read = true;
    } else {
      this.notificationsList = this.notificationsList.filter(n => n !== notification);
    }
    this.notifications.markAsRead(notification._id).subscribe();
  }

  goToUser(uid) {
    this.navbarService.go(`/u/${uid}`);
  }

}
