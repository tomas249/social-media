import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { filter, first, flatMap, map, tap } from 'rxjs/operators';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';
import { ProfileService } from '../../profile/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  user;
  selectedTab;
  tabs = {
    posts: {
      name: 'Posts',
      queryUrl: (uid) => `/posts?owner=${uid}&parent[size]=0&childLevel=0`
    },
    replies: {
      name: 'Replies',
      queryUrl: (uid) => `/posts?owner=${uid}&parent[not][size]=0&childLevel=0`
    },
    media: {
      name: 'Media',
      queryUrl: (uid) => `/posts?owner=${uid}&media[gte][size]=1&childLevel=0`
    },
    getIdx: (name) => ['posts', 'replies', 'media'].indexOf(name),
    isValid: (name) => ['posts', 'replies', 'media'].includes(name)
  };
  queryUrl;
  params$;

  menu;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private navbarService: NavbarService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.params$ = this.route.params.pipe(
      // Fix & set incorrect tab param
      map(p => {
        // If incorrect, just select 'posts'
        // Later on, interacting with the menu it will be fixed automatically
        const tab = this.tabs.isValid(p.tab) ? p.tab : 'posts';
        // Set new tab
        this.selectedTab = tab;
        return { byData: p.byData, tab }
      }),
      // USER
      flatMap(p => {
        // First load or new user -> let's get user data
        if (!this.user || this.user?.username !== p.byData) {

          const byData = p.byData;
          const type = this.checkDataType(byData);
          return this.profileService.getUser(byData, type).pipe(
            map(profile => {
              return {
                first: !this.user,
                tab: p.tab,
                user: profile,
              };
            })
          );
        }
        // If user altready loaded and this params changed
        // means that only tab has changed
        else {
          return of({
            first: false,
            tab: p.tab,
            user: false,
          });
        }
      }),
      tap(p => {
        // If p.user exists means that the user is new and has to be updated
        if (p.user) {
          this.user = p.user;
        }
        // Even if this page is reached by navbar items, there is a needed to send 
        // again the menu because of the custom routes (they include user id)
        // No worries about performance because the navbar component identifies this
        // activity and only updates the routes and not the entire menu
        this.menu = this.getMenu(p.user?.username || this.user.username);
        this.menu.selChildIdx = this.tabs.getIdx(p.tab);
        this.navbarService.loadMenu(this.menu);
      }),
      // CONTENT
      tap(p => {
        this.queryUrl = this.tabs[p.tab].queryUrl(p.user?._id || this.user._id);
      }),
    ).subscribe(content => {
    });
  }

  changeTab(tab) {
    const itemIdx = this.tabs.getIdx(tab);
    this.navbarService.changeMenuItem(itemIdx);
  }

  private checkDataType(byData) {
    switch (true) {
      case /^[a-z0-9]{24}$/.test(byData):
        return 0;
      case /^.+[0-9]{4}[A-Z]{1}$/.test(byData):
        return 1;
      default:
        return null;
    }
  }

  private getMenu(uname) {
    return {
      root: 'Profile',
      name: [`@${uname}`],
      children: [
        { name: ['Posts'], activated: true, path: `/u/${uname}/` },
        { name: ['Replies'], activated: true, path: `/u/${uname}/replies` },
        { name: ['Media'], activated: true, path: `/u/${uname}/media` }
      ],
      activated: true,
      selChildIdx: 0
    }
  }

  ngOnDestroy(): void {
    this.params$.unsubscribe()
  }

  getFollowers() {
    const content = [
      { title: 'Followers' },
      { module: 'Profile', component: 'UsersList',
        params: {userId: this.user._id, populate: 'followers'} }
    ];
    const modal = {type: 'default', content};
    const location = {action:'add', stack:[]};
    this.modalService.open(modal, location);
  }

}
