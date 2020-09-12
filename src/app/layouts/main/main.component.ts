import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, AfterContentChecked, AfterContentInit, DoCheck } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
import { NotificationsService } from 'src/app/modules/notifications/notifications.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  navItems: any[] = [];
  locationName: string;
  user;

  selectedItem;
  isModalNavItems;

  solicitedProfile = false;

  notificationsCount = 0;

  constructor(
    private locationService: LocationService,
    private notifications: NotificationsService,
    private token: TokenService,
    private modal: ModalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // NavItems
    this.locationService.subscribeNavItems().pipe(delay(0)).subscribe(
      res => {
        this.navItems = res.navItems;
        this.selectedItem = res.selected || null;
        this.isModalNavItems = res.modal || false;
        // console.error('MAIN >>', this.navItems)
      }
    );
    // Location
    this.locationService.subscribeLocation().pipe(delay(0)).subscribe(
      res => {
        this.locationName = res;

        // User
        this.token.subscribeAcc().pipe(delay(0)).subscribe(
          res => {
            this.user = res;
            if (this.solicitedProfile) this.goToProfile();
          }
        );
      }
    );
    // SocketIO
    // this.notifications.getNotifications(true).subscribe(res => {
    //   this.notificationsCount = res.data.length;
    //   this.notifications.connect();
    //   this.notifications.getMessage().subscribe((res: any) => {
    //     this.notificationsCount += 1;
    //   });
    // })
  }

  goTo(item) {
    if (item.name === this.selectedItem) return;
    if (this.isModalNavItems) {
      this.modal.change(item.component, item.name);
    } else {
      this.router.navigate([item.path]);
    }
    this.selectedItem = item.name;
  }

  goToProfile() {
    if (!this.user) {
      this.solicitedProfile = true;
      return;
    }
    this.router.navigate(['/u/' + this.user.username])
  }

  openPostModal() {
    if (!this.token.isLogged()) {
      this.modal.addMessage('Auth in order to post');
      this.modal.open('AuthModule', 'LoginComponent', {navigateEnd: false});
    } else {
      this.modal.open('PostsModule', 'PostPublishComponent')
    }
  }

  accountGoTo() {
    this.modal.close();
    if (this.user) {
      this.router.navigate(['/auth/accounts']);
    } else {
      this.router.navigate(['/auth/login']);
      this.selectedItem = 'Login';
    }
  }

}
