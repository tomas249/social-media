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

  modal1() {
    // this.postsService.publishPost({text: 'hey man', media: []}, {destination:1, parentIndex:0} )
    const content = [
      { module: 'Posts', component:'PostPublish'}
    ];
    const params = {destinationConfig: {destination: 1, parentIndex: 0}};
    const modal = {type: 'default', content, params};
    const location = {action: 'add', name: ['Publish', 'Post']};
    this.modalService.open(modal, location);
  }

  data = 0;
  modal2() {
    const content = [
      { title: 'PUBLISH' },
      { module: 'Posts', component:'PostPublish'},
      { title: 'We hope you like it'}
    ];
    const modal = {type: 'default', content};
    const location = {action: 'add', name: ['PublishContent']};
    this.modalService.open(modal, location);
  }

  modal3() {
    const content = [
      { title: 'You have nothing to do here' },
      // { module: 'Auth', component:'Logout'}
    ];
    const modal = {type: 'default', content};
    const location = {action: 'set', name: ['ACCOUNT']};
    this.modalService.open(modal, location, (res) => {
      console.log('3) this is callback:', res);
      this.data = res;
    });
  }
}
