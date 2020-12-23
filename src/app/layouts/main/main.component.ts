import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';
import { delay } from 'rxjs/operators';
import { PostsService } from 'src/app/modules/posts/posts.service';
import { LocationService } from 'src/app/services/location.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isShowingRouteLoadIndicator: boolean = false;

  location$;
  user$;
  
  constructor(
    private locationService: LocationService,
    private tokenService: TokenService,
    private router: Router,
    private modalService: ModalService,
    private navbarService: NavbarService,
    private postsService: PostsService
  ) {
    // Loading modules
		router.events.subscribe(
			(event: RouterEvent): void => {
				if (event instanceof RouteConfigLoadStart) {
					this.isShowingRouteLoadIndicator = true;
				}
				else if (event instanceof RouteConfigLoadEnd) {
					this.isShowingRouteLoadIndicator = false;
				}
			}
		);
  }

  ngOnInit() {
    // Make location synchronous
    this.location$ = this.locationService.location$.pipe(delay(0));
    this.user$ = this.tokenService.user$;
  }

  goTo(url) {
    this.navbarService.go(url);
  }

  uploadProgress = null;
  openPostModal() {
    if (!this.checkAuth('In order to post you need to be logged in')) return;

    const destination = ['/home', '/explore'].includes(window.location.pathname) ? 1 : 0 ;
    const destinationConfig = {destination, parentIndex: 0};
    const modal = {
      type: 'default',
      content: [{ module: 'Posts', component: 'PostPublish', params: {destinationConfig} }]
    };
    const location = {action: (destination ? 'add': 'set'), stack: ['Post']};
    this.modalService.open(modal, location, (res) => {
      if (!res) {
        // Now, reply is being published, so we can change location to indicate that
        this.locationService.changeStackByAction({
          action: 'add',
          stack: ['Publishing...'],
          remove: 1
        });
      } 
      else if (res && res.hasOwnProperty('progress')) {
        this.uploadProgress = res.progress;
      }
      else {
        this.uploadProgress = null;
      }
    });
  }

  checkAuth(message) {
    if (this.tokenService.isLogged()) {
      return true;
    }
    else {
      const modal = {type: 'default', content: [
        { title: message },
        { module: 'Auth', component: 'Login', params: {navigateEnd: false} }
      ]};
      const location = {action: 'add', stack: ['Login']};
      this.modalService.open(modal, location);
      return false
    }
  }
}
