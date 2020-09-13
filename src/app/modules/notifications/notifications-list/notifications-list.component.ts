import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import { LocationService } from 'src/app/services/location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit, OnDestroy {

  notificationsList;
  notificationsCount = 2;
  notificationsFilter;

  constructor(
    private notifications: NotificationsService,
    private router: Router,
    private locationService: LocationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // String.prototype['format'] = function() {
    //   return [...arguments].reduce((p,c) => p.replace(/%s/,c), this);
    // };
    this.route.params.subscribe(params => {
      this.locationService.removeChildLoc(true);
      this.notificationsFilter = params.notificationsFilter;
      if (['all', 'unread'].includes(this.notificationsFilter)) {
        const redirects = {
          all: 'All',
          unread: 'Only unread'
        }
        this.locationService.addChildLoc(redirects[this.notificationsFilter], {extend:false, parentLoc:'Notifications', useNav:true});

        this.notifications.getNotifications(this.notificationsFilter === 'unread').subscribe(res => {
          this.notificationsList = res.data.reverse();
        });
        // this.notifications.sub().subscribe(res => {
        //   console.warn(res);
        // })
      } else {
        this.router.navigate(['/notifications/unread']);
      }
    });
    
    // SocketIO
    // this.notifications.connect();
    // this.notifications.getMessage().subscribe(res => {
    //   console.log(res);
    //   this.notificationsList.unshift(res);
    // });
  }

  ngOnDestroy() {
    this.locationService.removeChildLoc(true);
  }

  markAsRead(notification) {
    if (this.notificationsFilter === 'all') {
      notification.read = true;
    } else {
      this.notificationsList = this.notificationsList.filter(n => n !== notification);
    }
    this.notifications.markAsRead(notification._id).subscribe();
  }









  // onConnect() {
  //   this.notifications.connect();
  // }

  // onEmmit() {
  //   this.notifications.sendMessage();
  //   this.notifications.getMessage().subscribe(res => {
  //     console.log(res);
  //   })
  // }

  // getNotificationText(notification) {
  //   return notification.text.format(notification.responsible.name);
  // }

}
