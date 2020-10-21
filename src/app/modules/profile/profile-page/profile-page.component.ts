import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { delay } from 'rxjs/operators';
import { LocationService } from 'src/app/services/location.service';
import { Location } from '@angular/common';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  @ViewChild('tabContent',  { read: ViewContainerRef }) tabContent: ViewContainerRef;
  user;
  selectedTab;
  tabs = [{name:'Posts'}, {name:'Replies'}, {name:'Media'}];
  tabsContent = {};

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private resolver: ComponentFactoryResolver,
    private locationService: LocationService,
    private location: Location,
    private token: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const capitalUsername = params.username[0].toUpperCase() + params.username.slice(1).toLowerCase();
      // this.locationService.addChildLoc('Posts', {extend: false, parentLoc: capitalUsername, useNav: false});
      const storedUser = this.profileService.getStoredUser();
      if (storedUser) {
        this.user = storedUser;
        this.profileService.getUserById(storedUser._id).subscribe(
          res => {
            this.user = res.data;
            this.selectByUrlParam(params);
          }
        )
      } else {
        const currentUserId = this.token.getUserId();
        if (params.username === 'me' && currentUserId) {
          this.profileService.getUserById(currentUserId).pipe(delay(0)).subscribe(
            res => {
              this.user = res.data[0];
              this.selectByUrlParam(params);
            }
          );
        }
        else if (params.username === 'me' && !currentUserId) {
          this.router.navigate(['/explore']);
        }
        else {
          this.profileService.getUserByUsername(params.username).pipe(delay(0)).subscribe(
            res => {
              this.user = res.data;
              // cosole.log(this.user)
              this.selectByUrlParam(params);
            },
            err => {
              this.router.navigate(['/explore']);
            }
          );
        }
      }
    });
  }

  private selectByUrlParam(params) {
    if (params.tab) {
      this.selectTab(this.tabs.map(t => t.name.toLowerCase()).indexOf(params.tab));
    } else {
      this.selectTab(0);
    }
  }

  async selectTab(i) {
    // Replies not working yet
    if (i === 1) {
      console.error('Replies tab not working yet');
      return;
    }
    if (this.selectedTab === i) return;
    await this.loadModule(this.tabs[i]);
    if (this.selectedTab || this.selectedTab === 0) {
      // this.locationService.removeChildLoc(true);
      // this.locationService.addChildLoc(this.tabs[i].name, {extend: true});
    }
    // this.location.go(this.tabs[i].name);
    this.selectedTab = i;
  }

  module = {
    Posts: {
      import: async () => (await import('src/app/modules/posts/posts.module')).PostsModule,
      component: 'PostsListComponent'
    },
    Media: {
      import: async () => (await import('src/app/modules/auth/auth.module')).AuthModule,
      component: 'LogoutComponent'
    }
  }

  async loadModule(tab) {
    const selectedModule = this.module[tab.name];
    const activeModule = await selectedModule.import();
    this.changeComponent(tab.name, activeModule, selectedModule.component);
  }

  changeComponent(tabName, loadedModule, componentName) {
    this.tabContent.remove();
    const component = loadedModule.components[componentName];
    const componentFct = this.resolver.resolveComponentFactory(component);
    this.tabsContent[tabName] = this.tabContent.createComponent(componentFct);
    const searchParams = '?parent[size]=0&childLevel=0&owner=' + this.user._id;
    Object.assign(this.tabsContent[tabName].instance, {searchParams});
  }

}
