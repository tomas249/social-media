import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, AfterContentChecked, AfterContentInit, DoCheck } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
import { ProfileService } from 'src/app/modules/profile/profile.service';

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

  constructor(
    private locationService: LocationService,
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
    )
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
